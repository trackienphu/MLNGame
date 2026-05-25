"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useMemo, useState } from "react";
import {
  difficulties,
  getDifficulty,
  stages,
  type Difficulty,
  type PhilosopherStage,
} from "@/data/philosophers";

type Tile = number | null;

type StageRecord = {
  stars: number;
  bestSeconds: number;
};

type Progress = Record<string, StageRecord>;

type Completion = {
  seconds: number;
  stars: number;
};

const STORAGE_KEY = "manh-ghep-minh-triet-progress";

function formatSeconds(seconds: number) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainder = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function createSolvedBoard(size: number): Tile[] {
  return Array.from({ length: size * size }, (_, index) =>
    index === size * size - 1 ? null : index,
  );
}

function isSolved(tiles: Tile[]) {
  return tiles.every((tile, index) => tile === (index === tiles.length - 1 ? null : index));
}

function getNeighbors(index: number, size: number) {
  const row = Math.floor(index / size);
  const column = index % size;
  const neighbors: number[] = [];

  if (row > 0) neighbors.push(index - size);
  if (row < size - 1) neighbors.push(index + size);
  if (column > 0) neighbors.push(index - 1);
  if (column < size - 1) neighbors.push(index + 1);

  return neighbors;
}

function shuffleBoard(size: number, moves: number) {
  const board = createSolvedBoard(size);
  let emptyIndex = board.length - 1;
  let previousEmptyIndex = -1;

  for (let move = 0; move < moves; move += 1) {
    const choices = getNeighbors(emptyIndex, size).filter(
      (choice) => choice !== previousEmptyIndex,
    );
    const pickedIndex = choices[Math.floor(Math.random() * choices.length)];
    board[emptyIndex] = board[pickedIndex];
    board[pickedIndex] = null;
    previousEmptyIndex = emptyIndex;
    emptyIndex = pickedIndex;
  }

  if (isSolved(board)) {
    const firstNeighbor = getNeighbors(emptyIndex, size)[0];
    board[emptyIndex] = board[firstNeighbor];
    board[firstNeighbor] = null;
  }

  return board;
}

function isMovable(index: number, tiles: Tile[], size: number) {
  return getNeighbors(tiles.indexOf(null), size).includes(index);
}

function calculateStars(seconds: number, difficulty: Difficulty) {
  if (seconds <= difficulty.starTimes.three) return 3;
  if (seconds <= difficulty.starTimes.two) return 2;
  return 1;
}

function isUnlocked(index: number, progress: Progress) {
  return index === 0 || Boolean(progress[stages[index - 1].id]);
}

function isValidProgress(value: unknown): value is Progress {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;

  return Object.values(value).every((record) => {
    if (!record || typeof record !== "object") return false;

    const candidate = record as Partial<StageRecord>;
    return (
      Number.isInteger(candidate.stars) &&
      (candidate.stars ?? 0) >= 1 &&
      (candidate.stars ?? 0) <= 3 &&
      Number.isInteger(candidate.bestSeconds) &&
      (candidate.bestSeconds ?? 0) >= 1
    );
  });
}

function Stars({ count }: { count: number }) {
  return (
    <span className="stars" aria-label={`${count} sao`}>
      {Array.from({ length: 3 }, (_, index) => (
        <span key={index} className={index < count ? "star-filled" : "star-empty"}>
          ★
        </span>
      ))}
    </span>
  );
}

export function PhilosopherPuzzleGame() {
  const [progress, setProgress] = useState<Progress>({});
  const [progressReady, setProgressReady] = useState(false);
  const [activeStageId, setActiveStageId] = useState<string | null>(null);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [moves, setMoves] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completion, setCompletion] = useState<Completion | null>(null);
  const [showNumbers, setShowNumbers] = useState(true);

  useEffect(() => {
    const loadSavedProgress = window.setTimeout(() => {
      try {
        const savedProgress = window.localStorage.getItem(STORAGE_KEY);
        if (savedProgress) {
          const parsedProgress: unknown = JSON.parse(savedProgress);
          if (isValidProgress(parsedProgress)) {
            setProgress(parsedProgress);
          } else {
            window.localStorage.removeItem(STORAGE_KEY);
          }
        }
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      } finally {
        setProgressReady(true);
      }
    }, 0);

    return () => window.clearTimeout(loadSavedProgress);
  }, []);

  useEffect(() => {
    if (!isPlaying || completion) return;

    const timer = window.setInterval(() => {
      setElapsedSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [completion, isPlaying]);

  const activeStage = stages.find((stage) => stage.id === activeStageId) ?? null;
  const activeDifficulty = activeStage ? getDifficulty(activeStage.levelId) : null;

  const stats = useMemo(() => {
    const finished = stages.filter((stage) => Boolean(progress[stage.id])).length;
    const stars = stages.reduce((sum, stage) => sum + (progress[stage.id]?.stars ?? 0), 0);
    return { finished, stars };
  }, [progress]);

  function persistProgress(nextProgress: Progress) {
    setProgress(nextProgress);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProgress));
  }

  function startStage(stage: PhilosopherStage) {
    const difficulty = getDifficulty(stage.levelId);
    setActiveStageId(stage.id);
    setTiles(shuffleBoard(difficulty.gridSize, difficulty.scrambleMoves));
    setMoves(0);
    setElapsedSeconds(0);
    setIsPlaying(true);
    setCompletion(null);
    setShowNumbers(difficulty.gridSize === 3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function finishStage(stage: PhilosopherStage, seconds: number) {
    const earnedStars = calculateStars(seconds, getDifficulty(stage.levelId));
    const previous = progress[stage.id];
    const nextProgress = {
      ...progress,
      [stage.id]: {
        stars: Math.max(previous?.stars ?? 0, earnedStars),
        bestSeconds: Math.min(previous?.bestSeconds ?? seconds, seconds),
      },
    };

    persistProgress(nextProgress);
    setIsPlaying(false);
    setCompletion({ seconds, stars: earnedStars });
  }

  function moveTile(index: number) {
    if (!activeStage || !activeDifficulty || completion || !isMovable(index, tiles, activeDifficulty.gridSize)) {
      return;
    }

    const emptyIndex = tiles.indexOf(null);
    const nextTiles = [...tiles];
    nextTiles[emptyIndex] = nextTiles[index];
    nextTiles[index] = null;
    setTiles(nextTiles);
    setMoves((currentMoves) => currentMoves + 1);

    if (isSolved(nextTiles)) {
      const seconds = Math.max(1, elapsedSeconds);
      setElapsedSeconds(seconds);
      finishStage(activeStage, seconds);
    }
  }

  function returnToMap() {
    setIsPlaying(false);
    setActiveStageId(null);
  }

  function resetProgress() {
    if (!window.confirm("Xóa toàn bộ sao và thời gian tốt nhất của bạn?")) return;

    window.localStorage.removeItem(STORAGE_KEY);
    setProgress({});
  }

  if (activeStage && activeDifficulty) {
    const currentIndex = stages.findIndex((stage) => stage.id === activeStage.id);
    const nextStage = stages[currentIndex + 1] ?? null;
    const gridStyle = {
      gridTemplateColumns: `repeat(${activeDifficulty.gridSize}, minmax(0, 1fr))`,
    } satisfies CSSProperties;

    return (
      <main className="play-screen">
        <header className="play-header">
          <button className="text-button" onClick={returnToMap}>
            ← Chọn màn
          </button>
          <div className="chapter-marker">
            Cấp {activeDifficulty.id} / Màn {activeStage.order}
          </div>
          <button className="text-button" onClick={() => startStage(activeStage)}>
            Chơi lại
          </button>
        </header>

        <section className="play-layout">
          <aside className="portrait-panel">
            <p className="eyebrow">Chân dung cần phục dựng</p>
            <div className="reference-image">
              <Image src={activeStage.image} alt={`Chân dung ${activeStage.name}`} fill priority />
            </div>
            <h1>{activeStage.name}</h1>
            <p className="era">
              {activeStage.era} · {activeStage.origin}
            </p>
            <blockquote>{activeStage.idea}</blockquote>
          </aside>

          <section className="puzzle-panel" aria-label={`Màn ghép hình ${activeStage.name}`}>
            <div className="play-metrics">
              <div>
                <span>Thời gian</span>
                <strong>{formatSeconds(elapsedSeconds)}</strong>
              </div>
              <div>
                <span>Lượt dịch</span>
                <strong>{moves}</strong>
              </div>
              <div>
                <span>Mục tiêu 3 sao</span>
                <strong>{formatSeconds(activeDifficulty.starTimes.three)}</strong>
              </div>
            </div>

            <div className="puzzle-frame">
              <div className="puzzle-board" style={gridStyle}>
                {tiles.map((tile, index) =>
                  tile === null ? (
                    <div className="puzzle-empty" key="empty" aria-hidden="true" />
                  ) : (
                    <button
                      className={`puzzle-tile ${
                        isMovable(index, tiles, activeDifficulty.gridSize) ? "movable" : ""
                      }`}
                      key={tile}
                      onClick={() => moveTile(index)}
                      aria-label={`Di chuyển mảnh ${tile + 1}`}
                      style={{
                        backgroundImage: `url(${activeStage.image})`,
                        backgroundSize: `${activeDifficulty.gridSize * 100}% ${
                          activeDifficulty.gridSize * 100
                        }%`,
                        backgroundPosition: `${
                          (tile % activeDifficulty.gridSize) *
                          (100 / (activeDifficulty.gridSize - 1))
                        }% ${
                          Math.floor(tile / activeDifficulty.gridSize) *
                          (100 / (activeDifficulty.gridSize - 1))
                        }%`,
                      }}
                    >
                      {showNumbers && <span>{tile + 1}</span>}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="puzzle-actions">
              <button className="secondary-button" onClick={() => setShowNumbers(!showNumbers)}>
                {showNumbers ? "Ẩn số gợi ý" : "Hiện số gợi ý"}
              </button>
              <p>Chạm vào mảnh sát ô trống để dịch chuyển.</p>
            </div>
          </section>
        </section>

        {completion && (
          <div className="story-backdrop" role="presentation">
            <article className="story-card" role="dialog" aria-modal="true" aria-labelledby="story-title">
              <div className="story-portrait">
                <Image src={activeStage.image} alt="" fill />
              </div>
              <div className="story-content">
                <p className="eyebrow">Hoàn thành · {formatSeconds(completion.seconds)}</p>
                <Stars count={completion.stars} />
                <h2 id="story-title">{activeStage.name}</h2>
                <p className="story-meta">
                  {activeStage.era} · {activeStage.origin}
                </p>
                <p className="story-text">{activeStage.story}</p>
                <div className="story-actions">
                  <button className="secondary-button" onClick={returnToMap}>
                    Về bản đồ
                  </button>
                  {nextStage && (
                    <button className="primary-button" onClick={() => startStage(nextStage)}>
                      Màn kế tiếp →
                    </button>
                  )}
                </div>
              </div>
            </article>
          </div>
        )}
      </main>
    );
  }

  return (
    <main className="map-screen">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Sliding puzzle · hành trình triết học</p>
          <h1>
            Mảnh ghép
            <span>Minh Triết</span>
          </h1>
          <p className="hero-description">
            Khôi phục chân dung của 15 triết gia. Ghép càng nhanh, bạn càng thu thập
            nhiều sao và mở được những câu chuyện phía sau tư tưởng của họ.
          </p>
          <button
            className="primary-button"
            onClick={() => startStage(stages[Math.min(stats.finished, stages.length - 1)])}
          >
            {stats.finished === 0 ? "Bắt đầu hành trình" : "Tiếp tục hành trình"} →
          </button>
        </div>

        <div className="progress-card" aria-label="Tiến độ người chơi">
          <p className="eyebrow">Sổ hành trình</p>
          <div className="progress-numbers">
            <div>
              <strong>{stats.finished}</strong>
              <span>/ 15 màn</span>
            </div>
            <div>
              <strong>{stats.stars}</strong>
              <span>/ 45 sao</span>
            </div>
          </div>
          <div className="progress-track">
            <span style={{ width: `${(stats.finished / stages.length) * 100}%` }} />
          </div>
          <button className="text-button reset-button" onClick={resetProgress}>
            Xóa tiến độ
          </button>
        </div>
      </header>

      <section className="levels" aria-label="Danh sách cấp độ">
        {difficulties.map((difficulty) => {
          const levelStages = stages.filter((stage) => stage.levelId === difficulty.id);

          return (
            <article className="level" key={difficulty.id}>
              <header className="level-heading">
                <div className="level-number">0{difficulty.id}</div>
                <div>
                  <h2>{difficulty.title}</h2>
                  <p>{difficulty.subtitle}</p>
                </div>
                <div className="level-grid-size">{difficulty.gridSize} × {difficulty.gridSize}</div>
              </header>
              <div className="stage-list">
                {levelStages.map((stage) => {
                  const index = stages.findIndex((candidate) => candidate.id === stage.id);
                  const unlocked = progressReady && isUnlocked(index, progress);
                  const record = progress[stage.id];

                  return (
                    <button
                      className={`stage-card ${unlocked ? "" : "locked"}`}
                      disabled={!unlocked}
                      key={stage.id}
                      onClick={() => startStage(stage)}
                    >
                      <span className="stage-image">
                        <Image src={stage.image} alt="" fill />
                        {!unlocked && <span className="lock-label">Khóa</span>}
                      </span>
                      <span className="stage-details">
                        <span className="stage-index">Màn {stage.order.toString().padStart(2, "0")}</span>
                        <strong>{stage.name}</strong>
                        {record ? <Stars count={record.stars} /> : <span className="unplayed">Chưa khám phá</span>}
                      </span>
                      {record && <span className="best-time">{formatSeconds(record.bestSeconds)}</span>}
                    </button>
                  );
                })}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
