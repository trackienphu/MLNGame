"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useMemo, useState } from "react";
import {
  type Difficulty,
  type PhilosopherStage,
} from "@/data/philosophers";
import {
  localizedContent,
  uiCopy,
  type Locale,
  type UiCopy,
} from "@/data/localization";

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
const LANGUAGE_STORAGE_KEY = "manh-ghep-minh-triet-language";
const localeOptions: { label: string; value: Locale }[] = [
  { label: "Tiếng Việt", value: "vi" },
  { label: "English", value: "en" },
];
const platformAuthors = [
  { name: "Trác Kiến Phú", role: "AI Engineer" },
  { name: "Nguyễn Phước Phi Long", role: "Data Engineer" },
];

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

function getDifficulty(levelId: number, difficulties: Difficulty[]) {
  return difficulties.find((difficulty) => difficulty.id === levelId) ?? difficulties[0];
}

function getStageDifficulty(
  stage: PhilosopherStage,
  difficulties: Difficulty[],
  specialDifficulty: Difficulty,
) {
  return stage.levelId === specialDifficulty.id
    ? specialDifficulty
    : getDifficulty(stage.levelId, difficulties);
}

function isUnlocked(index: number, progress: Progress, stages: PhilosopherStage[]) {
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

function LanguageSwitcher({
  copy,
  locale,
  onChange,
}: {
  copy: UiCopy;
  locale: Locale;
  onChange: (locale: Locale) => void;
}) {
  return (
    <div className="language-switcher" role="group" aria-label={copy.languageSwitcherLabel}>
      {localeOptions.map((option) => (
        <button
          aria-pressed={locale === option.value}
          className={locale === option.value ? "active" : ""}
          key={option.value}
          onClick={() => onChange(option.value)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Stars({ copy, count }: { copy: UiCopy; count: number }) {
  return (
    <span className="stars" aria-label={`${count} ${copy.starsLabel}`}>
      {Array.from({ length: 3 }, (_, index) => (
        <span key={index} className={index < count ? "star-filled" : "star-empty"}>
          ★
        </span>
      ))}
    </span>
  );
}

function PhilosopherStory({
  copy,
  stage,
  includeSummary = true,
}: {
  copy: UiCopy;
  stage: PhilosopherStage;
  includeSummary?: boolean;
}) {
  return (
    <div className="philosopher-story">
      {includeSummary && <p className="story-summary">{stage.story.summary}</p>}
      <div className="story-chapters">
        {stage.story.chapters.map((chapter) => (
          <section key={chapter.title}>
            <h3>{chapter.title}</h3>
            <p>{chapter.body}</p>
          </section>
        ))}
      </div>
      <div className="story-reading-list">
        <p>{copy.readingList}</p>
        <ul>
          {stage.story.works.map((work) => (
            <li key={work}>{work}</li>
          ))}
        </ul>
      </div>
      <a
        className="story-source"
        href={stage.story.sourceUrl}
        rel="noreferrer"
        target="_blank"
      >
        {copy.sourceLink}
      </a>
    </div>
  );
}

export function PhilosopherPuzzleGame() {
  const [locale, setLocale] = useState<Locale>("vi");
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
    const loadSavedLocale = window.setTimeout(() => {
      const savedLocale = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      const browserLocale = window.navigator.language.toLowerCase().startsWith("vi")
        ? "vi"
        : "en";

      setLocale(savedLocale === "vi" || savedLocale === "en" ? savedLocale : browserLocale);
    }, 0);

    return () => window.clearTimeout(loadSavedLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

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

  const copy = uiCopy[locale];
  const { difficulties, specialDifficulty, specialStage, stages } = localizedContent[locale];
  const allStages = useMemo(() => [...stages, specialStage], [specialStage, stages]);
  const activeStage = allStages.find((stage) => stage.id === activeStageId) ?? null;
  const activeDifficulty = activeStage
    ? getStageDifficulty(activeStage, difficulties, specialDifficulty)
    : null;

  const stats = useMemo(() => {
    const finished = stages.filter((stage) => Boolean(progress[stage.id])).length;
    const stars = stages.reduce((sum, stage) => sum + (progress[stage.id]?.stars ?? 0), 0);
    return { finished, stars };
  }, [progress, stages]);
  const discoveredStages = useMemo(
    () => allStages.filter((stage) => Boolean(progress[stage.id])),
    [allStages, progress],
  );
  const specialRecord = progress[specialStage.id];

  function persistProgress(nextProgress: Progress) {
    setProgress(nextProgress);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProgress));
  }

  function startStage(stage: PhilosopherStage) {
    const difficulty = getStageDifficulty(stage, difficulties, specialDifficulty);
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
    const earnedStars = calculateStars(
      seconds,
      getStageDifficulty(stage, difficulties, specialDifficulty),
    );
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

  function changeLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLocale);
  }

  function resetProgress() {
    if (!window.confirm(copy.resetConfirm)) return;

    window.localStorage.removeItem(STORAGE_KEY);
    setProgress({});
  }

  if (activeStage && activeDifficulty) {
    const currentIndex = stages.findIndex((stage) => stage.id === activeStage.id);
    const nextStage = currentIndex >= 0 ? stages[currentIndex + 1] ?? null : null;
    const gridStyle = {
      gridTemplateColumns: `repeat(${activeDifficulty.gridSize}, minmax(0, 1fr))`,
    } satisfies CSSProperties;

    return (
      <main className="play-screen">
        <header className="play-header">
          <button className="text-button" onClick={returnToMap}>
            {copy.chooseStage}
          </button>
          <div className="chapter-marker">
            {activeStage.id === specialStage.id
              ? copy.specialStageLabel
              : `${copy.level} ${activeDifficulty.id} / ${copy.stage} ${activeStage.order}`}
          </div>
          <div className="play-header-actions">
            <LanguageSwitcher copy={copy} locale={locale} onChange={changeLocale} />
            <button className="text-button" onClick={() => startStage(activeStage)}>
              {copy.replay}
            </button>
          </div>
        </header>

        <section className="play-layout">
          <aside className="portrait-panel">
            <p className="eyebrow">{copy.portraitToRestore}</p>
            <div className="reference-image">
              <Image
                src={activeStage.image}
                alt={`${copy.portraitAlt} ${activeStage.name}`}
                fill
                preload
                sizes="(max-width: 990px) 132px, 310px"
              />
            </div>
            <h1>{activeStage.name}</h1>
            <p className="era">
              {activeStage.era} · {activeStage.origin}
            </p>
            <blockquote>{activeStage.idea}</blockquote>
          </aside>

          <section className="puzzle-panel" aria-label={`${copy.puzzleLabel} ${activeStage.name}`}>
            <div className="play-metrics">
              <div>
                <span>{copy.time}</span>
                <strong>{formatSeconds(elapsedSeconds)}</strong>
              </div>
              <div>
                <span>{copy.moves}</span>
                <strong>{moves}</strong>
              </div>
              <div>
                <span>{copy.threeStarTarget}</span>
                <strong>{formatSeconds(activeDifficulty.starTimes.three)}</strong>
              </div>
            </div>

            <div className="puzzle-frame">
              <div
                className={`puzzle-board ${activeDifficulty.gridSize >= 10 ? "dense" : ""}`}
                style={gridStyle}
              >
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
                      aria-label={`${copy.moveTile} ${tile + 1}`}
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
                {showNumbers ? copy.hideHints : copy.showHints}
              </button>
              <p>{copy.moveInstruction}</p>
            </div>
          </section>
        </section>

        {completion && (
          <div className="story-backdrop" role="presentation">
            <article className="story-card" role="dialog" aria-modal="true" aria-labelledby="story-title">
              <div className="story-portrait">
                <Image src={activeStage.image} alt="" fill sizes="255px" />
              </div>
              <div className="story-content">
                <p className="eyebrow">{copy.completed} · {formatSeconds(completion.seconds)}</p>
                <Stars copy={copy} count={completion.stars} />
                <h2 id="story-title">{activeStage.name}</h2>
                <p className="story-meta">
                  {activeStage.era} · {activeStage.origin}
                </p>
                <PhilosopherStory copy={copy} stage={activeStage} />
                <div className="story-actions">
                  <button className="secondary-button" onClick={returnToMap}>
                    {copy.backToMap}
                  </button>
                  {nextStage && (
                    <button className="primary-button" onClick={() => startStage(nextStage)}>
                      {copy.nextStage}
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
      <LanguageSwitcher copy={copy} locale={locale} onChange={changeLocale} />

      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{copy.heroEyebrow}</p>
          <h1>
            {copy.heroTitleFirst}
            <span>{copy.heroTitleSecond}</span>
          </h1>
          <p className="hero-description">{copy.heroDescription}</p>
          <button
            className="primary-button"
            onClick={() => startStage(stages[Math.min(stats.finished, stages.length - 1)])}
          >
            {stats.finished === 0 ? copy.startJourney : copy.continueJourney} →
          </button>
        </div>

        <div className="progress-card" aria-label={copy.playerProgress}>
          <p className="eyebrow">{copy.journeyJournal}</p>
          <div className="progress-numbers">
            <div>
              <strong>{stats.finished}</strong>
              <span>{copy.stagesTotal}</span>
            </div>
            <div>
              <strong>{stats.stars}</strong>
              <span>{copy.starsTotal}</span>
            </div>
          </div>
          <div className="progress-track">
            <span style={{ width: `${(stats.finished / stages.length) * 100}%` }} />
          </div>
          <button className="text-button reset-button" onClick={resetProgress}>
            {copy.resetProgress}
          </button>
        </div>
      </header>

      <section className="special-stage" aria-label={copy.specialStageLabel}>
        <header className="special-stage-heading">
          <div>
            <p className="eyebrow">{copy.specialStageLabel}</p>
            <h2>{copy.specialStageTitle}</h2>
          </div>
          <p>{copy.specialStageDescription}</p>
        </header>
        <button className="special-stage-card" onClick={() => startStage(specialStage)}>
          <span className="special-stage-image">
            <Image src={specialStage.image} alt="" fill sizes="112px" />
          </span>
          <span className="special-stage-details">
            <span className="stage-index">{copy.specialStageUnlocked}</span>
            <strong>{specialStage.name}</strong>
            <span className="special-stage-meta">
              {specialStage.era} · {specialStage.origin}
            </span>
            {specialRecord
              ? <Stars copy={copy} count={specialRecord.stars} />
              : <span className="unplayed">{copy.undiscovered}</span>}
          </span>
          <span className="special-stage-size">
            {specialDifficulty.gridSize} × {specialDifficulty.gridSize}
          </span>
        </button>
      </section>

      <section className="levels" aria-label={copy.levelList}>
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
                  const unlocked = progressReady && isUnlocked(index, progress, stages);
                  const record = progress[stage.id];

                  return (
                    <button
                      className={`stage-card ${unlocked ? "" : "locked"}`}
                      disabled={!unlocked}
                      key={stage.id}
                      onClick={() => startStage(stage)}
                    >
                      <span className="stage-image">
                        <Image src={stage.image} alt="" fill sizes="62px" />
                        {!unlocked && <span className="lock-label">{copy.locked}</span>}
                      </span>
                      <span className="stage-details">
                        <span className="stage-index">{copy.stage} {stage.order.toString().padStart(2, "0")}</span>
                        <strong>{stage.name}</strong>
                        {record ? <Stars copy={copy} count={record.stars} /> : <span className="unplayed">{copy.undiscovered}</span>}
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

      <section className="story-library" aria-label={copy.unlockedStories}>
        <header className="library-heading">
          <div>
            <p className="eyebrow">{copy.libraryEyebrow}</p>
            <h2>{copy.libraryTitle}</h2>
          </div>
          <p>{copy.libraryDescription}</p>
        </header>

        {discoveredStages.length === 0 ? (
          <div className="library-empty">
            <span>{copy.emptyLibrary}</span>
            <p>{copy.emptyLibraryDescription}</p>
          </div>
        ) : (
          <div className="archive-list">
            {discoveredStages.map((stage) => (
              <article className="archive-card" key={stage.id}>
                <div className="archive-portrait">
                  <Image src={stage.image} alt="" fill sizes="112px" />
                </div>
                <div className="archive-body">
                  <p className="stage-index">
                    {stage.id === specialStage.id
                      ? copy.specialStageProfile
                      : `${copy.profile} ${stage.order.toString().padStart(2, "0")}`}
                  </p>
                  <h3>{stage.name}</h3>
                  <p className="archive-meta">
                    {stage.era} · {stage.origin}
                  </p>
                  <p className="archive-summary">{stage.story.summary}</p>
                  <details className="archive-details">
                    <summary>{copy.readFullStory}</summary>
                    <PhilosopherStory copy={copy} stage={stage} includeSummary={false} />
                  </details>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="site-footer" aria-labelledby="about-us-title">
<<<<<<< HEAD
        <div className="footer-brand-column">
          <div className="footer-brand">
            <span className="footer-logo" aria-hidden="true">
              <Image src="/favicon.ico" alt="" width={36} height={36} unoptimized />
            </span>
            <div>
              <strong>{copy.heroTitleFirst} {copy.heroTitleSecond}</strong>
              <p>{copy.footerTagline}</p>
            </div>
          </div>

          <article className="author-card ai-tool-card">
            <strong>{copy.aiToolName}</strong>
            <span>{copy.aiToolDescription}</span>
          </article>
=======
        <div className="footer-brand">
          <span className="footer-logo" aria-hidden="true">
            <Image src="/favicon.ico" alt="" width={36} height={36} unoptimized />
          </span>
          <div>
            <strong>{copy.heroTitleFirst} {copy.heroTitleSecond}</strong>
            <p>{copy.footerTagline}</p>
          </div>
>>>>>>> 5d925fc48303ff23d94eb58a791b4d3da41b18aa
        </div>

        <section className="footer-about" aria-label={copy.aboutUsLabel}>
          <p className="eyebrow">{copy.aboutUsLabel}</p>
          <h2 id="about-us-title">{copy.aboutUsTitle}</h2>
          <p>{copy.aboutUsDescription}</p>
        </section>

        <section className="footer-authors" aria-label={copy.authorsLabel}>
          <p>{copy.authorsLabel}</p>
          <div className="author-list">
            {platformAuthors.map((author) => (
              <article className="author-card" key={author.name}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
              </article>
            ))}
          </div>
        </section>
      </footer>
    </main>
  );
}
