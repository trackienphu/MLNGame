import {
  difficulties as vietnameseDifficulties,
  stages as vietnameseStages,
  type Difficulty,
  type PhilosopherStage,
} from "@/data/philosophers";

export type Locale = "vi" | "en";

export type UiCopy = {
  languageSwitcherLabel: string;
  starsLabel: string;
  readingList: string;
  sourceLink: string;
  resetConfirm: string;
  chooseStage: string;
  level: string;
  stage: string;
  replay: string;
  portraitToRestore: string;
  portraitAlt: string;
  puzzleLabel: string;
  time: string;
  moves: string;
  threeStarTarget: string;
  moveTile: string;
  hideHints: string;
  showHints: string;
  moveInstruction: string;
  completed: string;
  backToMap: string;
  nextStage: string;
  heroEyebrow: string;
  heroTitleFirst: string;
  heroTitleSecond: string;
  heroDescription: string;
  startJourney: string;
  continueJourney: string;
  playerProgress: string;
  journeyJournal: string;
  stagesTotal: string;
  starsTotal: string;
  resetProgress: string;
  levelList: string;
  locked: string;
  undiscovered: string;
  unlockedStories: string;
  libraryEyebrow: string;
  libraryTitle: string;
  libraryDescription: string;
  emptyLibrary: string;
  emptyLibraryDescription: string;
  profile: string;
  readFullStory: string;
};

export const uiCopy: Record<Locale, UiCopy> = {
  vi: {
    languageSwitcherLabel: "Chọn ngôn ngữ",
    starsLabel: "sao",
    readingList: "Tác phẩm và cửa ngõ đọc thêm",
    sourceLink: "Đối chiếu nguồn: Stanford Encyclopedia of Philosophy ↗",
    resetConfirm: "Xóa toàn bộ sao và thời gian tốt nhất của bạn?",
    chooseStage: "← Chọn màn",
    level: "Cấp",
    stage: "Màn",
    replay: "Chơi lại",
    portraitToRestore: "Chân dung cần phục dựng",
    portraitAlt: "Chân dung",
    puzzleLabel: "Màn ghép hình",
    time: "Thời gian",
    moves: "Lượt dịch",
    threeStarTarget: "Mục tiêu 3 sao",
    moveTile: "Di chuyển mảnh",
    hideHints: "Ẩn số gợi ý",
    showHints: "Hiện số gợi ý",
    moveInstruction: "Chạm vào mảnh sát ô trống để dịch chuyển.",
    completed: "Hoàn thành",
    backToMap: "Về bản đồ",
    nextStage: "Màn kế tiếp →",
    heroEyebrow: "Sliding puzzle · hành trình triết học",
    heroTitleFirst: "Mảnh ghép",
    heroTitleSecond: "Minh Triết",
    heroDescription:
      "Khôi phục chân dung của 15 triết gia. Ghép càng nhanh, bạn càng thu thập nhiều sao và mở được những câu chuyện phía sau tư tưởng của họ.",
    startJourney: "Bắt đầu hành trình",
    continueJourney: "Tiếp tục hành trình",
    playerProgress: "Tiến độ người chơi",
    journeyJournal: "Sổ hành trình",
    stagesTotal: "/ 15 màn",
    starsTotal: "/ 45 sao",
    resetProgress: "Xóa tiến độ",
    levelList: "Danh sách cấp độ",
    locked: "Khóa",
    undiscovered: "Chưa khám phá",
    unlockedStories: "Câu chuyện đã mở khóa",
    libraryEyebrow: "Thư viện đã mở khóa",
    libraryTitle: "Câu chuyện phía sau chân dung",
    libraryDescription:
      "Hoàn thành một màn để lưu hồ sơ nhân vật tại đây. Bạn có thể đọc lại bất cứ lúc nào mà không cần chơi lại.",
    emptyLibrary: "Chưa có hồ sơ nào",
    emptyLibraryDescription: "Hoàn thành màn Socrates để mở câu chuyện đầu tiên.",
    profile: "Hồ sơ",
    readFullStory: "Đọc câu chuyện đầy đủ",
  },
  en: {
    languageSwitcherLabel: "Choose language",
    starsLabel: "stars",
    readingList: "Works and further reading",
    sourceLink: "Check source: Stanford Encyclopedia of Philosophy ↗",
    resetConfirm: "Delete all your stars and best times?",
    chooseStage: "← Choose stage",
    level: "Level",
    stage: "Stage",
    replay: "Replay",
    portraitToRestore: "Portrait to restore",
    portraitAlt: "Portrait of",
    puzzleLabel: "Portrait puzzle:",
    time: "Time",
    moves: "Moves",
    threeStarTarget: "3-star target",
    moveTile: "Move tile",
    hideHints: "Hide number hints",
    showHints: "Show number hints",
    moveInstruction: "Tap a tile next to the empty space to move it.",
    completed: "Completed",
    backToMap: "Back to map",
    nextStage: "Next stage →",
    heroEyebrow: "Sliding puzzle · a journey through philosophy",
    heroTitleFirst: "Pieces of",
    heroTitleSecond: "Wisdom",
    heroDescription:
      "Restore the portraits of 15 philosophers. The faster you solve each puzzle, the more stars you collect and the more stories you unlock behind their ideas.",
    startJourney: "Begin journey",
    continueJourney: "Continue journey",
    playerProgress: "Player progress",
    journeyJournal: "Journey journal",
    stagesTotal: "/ 15 stages",
    starsTotal: "/ 45 stars",
    resetProgress: "Reset progress",
    levelList: "Difficulty levels",
    locked: "Locked",
    undiscovered: "Undiscovered",
    unlockedStories: "Unlocked stories",
    libraryEyebrow: "Unlocked library",
    libraryTitle: "Stories behind the portraits",
    libraryDescription:
      "Complete a stage to save its philosopher profile here. You can return and read it again at any time without replaying the puzzle.",
    emptyLibrary: "No profiles yet",
    emptyLibraryDescription: "Complete the Socrates stage to unlock the first story.",
    profile: "Profile",
    readFullStory: "Read the full story",
  },
};

const englishDifficulties: Difficulty[] = vietnameseDifficulties.map(
  (difficulty, index) => ({
    ...difficulty,
    title: ["Opening", "Stillness", "Reason", "Dialectic", "Existence"][index],
    subtitle: [
      "Begin with questions",
      "Train the inner life",
      "Rebuild the foundations of knowledge",
      "Society, freedom and history",
      "People create their own meaning",
    ][index],
  }),
);

type StageTranslation = Pick<PhilosopherStage, "name" | "era" | "origin" | "idea"> & {
  story: Omit<PhilosopherStage["story"], "sourceUrl">;
};

const englishStageTranslations: Record<string, StageTranslation> = {
  socrates: {
    name: "Socrates",
    era: "469-399 BCE",
    origin: "Athens, Greece",
    idea: "Wisdom begins when we seriously examine what we think we already know.",
    story: {
      summary:
        "Socrates left no writings of his own. His story comes from other people, especially Plato, Xenophon and Aristophanes, so his historical portrait always has to be read with care.",
      chapters: [
        {
          title: "A philosopher in the public square",
          body:
            "Socrates often spoke with the people of Athens in public places. Instead of teaching a closed doctrine, he asked questions about courage, justice, virtue and how to live. These conversations forced participants to notice the distance between what they felt sure of and what they could actually explain.",
        },
        {
          title: "The trial of 399 BCE",
          body:
            "He was tried on charges of impiety toward the city's gods and corrupting the young. Socrates was sentenced to death. The trial and his death are known through ancient sources, especially works by Plato and Xenophon, and became uniquely influential images in the history of philosophy.",
        },
        {
          title: "The legacy of a thinker who wrote no books",
          body:
            "What remains is not a textbook written by Socrates but a model: live by examining your own beliefs and do not avoid difficult questions. Because the sources tell different stories, the historical Socrates should not be identified completely with the character named Socrates in any one work.",
        },
      ],
      works: [
        "Socrates left no written works",
        "Important ancient source: Plato's Apology",
        "Important ancient source: Xenophon's Memorabilia",
      ],
    },
  },
  confucius: {
    name: "Confucius",
    era: "traditionally 551-479 BCE",
    origin: "State of Lu, China",
    idea: "Ethics begins with cultivating oneself and treating other people with respect.",
    story: {
      summary:
        "Confucius lived near the end of the Spring and Autumn period and became one of the most influential figures in the intellectual history of East Asia. Ancient texts reflect layers of transmission, however, so the historical person has to be distinguished from later interpretations.",
      chapters: [
        {
          title: "Learning to cultivate oneself",
          body:
            "In the teachings passed down under his name, Confucius emphasizes the cultivation of character, the practice of ritual propriety and continuous learning. Ethics is not merely abstract: it appears in the way a person treats family, community and their responsibilities.",
        },
        {
          title: "A political ideal rooted in education",
          body:
            "Ancient sources describe Confucius as a teacher, adviser and reformer. He connects good government with the character of rulers: stable social order cannot rest on punishment alone, but also needs example, education and ritual.",
        },
        {
          title: "The Analects and centuries of interpretation",
          body:
            "The Analects preserves dialogues and teachings associated with Confucius, but it is not a book that he personally wrote in the modern sense. Across many dynasties, his image continued to be interpreted in education, politics and culture, producing a tradition more varied than any simple formula.",
        },
      ],
      works: [
        "The Analects: a transmitted collection of teachings and dialogues",
        "Later classics and commentaries should be distinguished from the earliest teachings",
      ],
    },
  },
  plato: {
    name: "Plato",
    era: "429?-347 BCE",
    origin: "Athens, Greece",
    idea: "What we see is only one part of the journey toward truth.",
    story: {
      summary:
        "Plato was an Athenian citizen, writer and philosopher with a foundational influence on the Western tradition. Instead of writing dry textbooks, he usually composed dialogues in which the question remains alive even after the reader closes the book.",
      chapters: [
        {
          title: "Writing philosophy as dialogue",
          body:
            "Socrates appears as the central character in many of Plato's dialogues. Through debates about justice, knowledge, love, education and the good life, Plato asks readers not only to accept conclusions but also to follow the way an argument is formed and tested.",
        },
        {
          title: "From the visible to the intelligible",
          body:
            "Plato is often associated with the theory of Forms or Ideas: sensible objects are not the whole of reality, and understanding requires us to move beyond the changing surface of the world. The allegory of the cave in the Republic is a famous image of this educational journey.",
        },
        {
          title: "An influence across the centuries",
          body:
            "Plato founded the Academy in Athens. From political philosophy to metaphysics and epistemology, his works have continued to be read, debated and reinterpreted in nearly every major period of Western philosophy.",
        },
      ],
      works: ["Republic", "Apology", "Symposium", "Phaedo"],
    },
  },
  aristotle: {
    name: "Aristotle",
    era: "384-322 BCE",
    origin: "Stagira, Greece",
    idea: "Virtue is a habit of choosing the right measure between extremes.",
    story: {
      summary:
        "Aristotle was born in Stagira in 384 BCE and came to Athens to study at the Academy when he was about seventeen. His range of inquiry was remarkably wide: from logic, ethics and politics to biology, poetry and the nature of things.",
      chapters: [
        {
          title: "From the Academy to field observations",
          body:
            "Aristotle remained connected to the Academy until Plato's death in 347 BCE. He then left Athens and lived in Assos and later Lesbos, where he continued philosophical study and biological investigation. These years reveal a durable feature of Aristotle's thought: theory has to be tested against the concrete world.",
        },
        {
          title: "Alexander's teacher",
          body:
            "In 343 BCE, at the invitation of King Philip of Macedon, Aristotle went to Pella to teach Alexander when the boy was about thirteen. Historians remain cautious about Aristotle's specific influence on the future king; what is certain is that this period of teaching took place.",
        },
        {
          title: "The Lyceum and a vast store of questions",
          body:
            "When he returned to Athens, Aristotle founded the Lyceum. He systematized many fields of inquiry and left a lasting mark on the ways people analyze arguments, causes, virtue, political life and the natural world.",
        },
      ],
      works: ["Nicomachean Ethics", "Politics", "Metaphysics", "Poetics"],
    },
  },
  epicurus: {
    name: "Epicurus",
    era: "341-270 BCE",
    origin: "Samos and Athens, Greece",
    idea: "Lasting happiness comes from tranquility, friendship and simple needs.",
    story: {
      summary:
        "Epicurus built a philosophical system aimed at happiness by reducing bodily pain and mental disturbance. He is often mistaken for an advocate of limitless indulgence, when his ideal is closer to a clear-minded, simple life sustained by friendship.",
      chapters: [
        {
          title: "A journey back to Athens",
          body:
            "Epicurus was born in 341 BCE and grew up on Samos. After periods of study and teaching in several places, he returned to Athens around 307 or 306 BCE. There he bought the property that became known as the Garden, the name associated with his school.",
        },
        {
          title: "Pleasure does not mean luxury",
          body:
            "For Epicurus, the goal is not to chase every desire. He emphasizes freedom from pain and anxiety while treating friendship as essential. Understanding nature also helps people fear the gods and punishment after death less.",
        },
        {
          title: "An interconnected system",
          body:
            "Epicurean ethics is closely linked to a materialist account of nature and a theory of knowledge. The surviving letters and short doctrines show a philosophy designed to be remembered, practiced and used to help people live more tranquilly.",
        },
      ],
      works: [
        "Letter to Menoeceus",
        "Letter to Herodotus",
        "Principal Doctrines",
        "On Nature: survives only in fragments",
      ],
    },
  },
  seneca: {
    name: "Seneca",
    era: "c. 1 BCE-65 CE",
    origin: "Corduba and Rome",
    idea: "We cannot control every event, but we can train the way we respond.",
    story: {
      summary:
        "Seneca was a Roman Stoic philosopher, writer and statesman. His life is not a simple story of serenity: it passes through power, exile, danger and contradictions that readers still have to weigh for themselves.",
      chapters: [
        {
          title: "From Corduba to Roman politics",
          body:
            "Lucius Annaeus Seneca was born around 1 BCE in Corduba, in Hispania, and educated in rhetoric and philosophy in Rome. His political career was successful but turbulent, giving him direct experience of ambition, intense emotion and the risks surrounding power.",
        },
        {
          title: "Exile and the reign of Nero",
          body:
            "In 41 CE, Seneca was exiled to Corsica. After his return, he taught the young Nero and became one of Nero's advisers after the emperor took the throne in 54. In 65, Seneca was accused of involvement in the Pisonian conspiracy and forced to take his own life.",
        },
        {
          title: "Philosophy as practice",
          body:
            "In his letters and ethical essays, Seneca writes about using time, handling anger, facing loss and training judgment. His approachable style invites readers to look at their own lives, but not every sentence in his books should be treated as direct autobiography.",
        },
      ],
      works: ["Letters to Lucilius", "On the Shortness of Life", "On Anger", "Natural Questions"],
    },
  },
  augustine: {
    name: "Augustine",
    era: "354-430",
    origin: "Roman North Africa",
    idea: "The search for truth is also a journey into memory and inner longing.",
    story: {
      summary:
        "Augustine of Hippo was one of the most influential Christian thinkers of antiquity. His life moved from rhetorical education and years as a Manichaean to conversion, a bishopric and a vast body of writing on memory, will, time, grace and history.",
      chapters: [
        {
          title: "A mind searching for a path",
          body:
            "Augustine was born in 354 in Thagaste in Roman North Africa, now in Algeria. He studied grammar and rhetoric in Madauros and Carthage, then followed Manichaeism for about nine years. In 383 he moved to Milan to take a publicly funded teaching position in rhetoric.",
        },
        {
          title: "A turning point in Milan",
          body:
            "In Milan, Augustine was influenced by Bishop Ambrose and Christians with Neoplatonic leanings. After a period of inner crisis, he converted in the summer of 386, gave up his rhetorical career and was baptized by Ambrose at Easter in 387.",
        },
        {
          title: "From Confessions to City of God",
          body:
            "After returning to North Africa, Augustine eventually became bishop of Hippo. Confessions combines personal recollection with philosophical and theological reflection; City of God was written as the Roman world shook. His questions about time, freedom and evil continued to shape medieval philosophy and later debates.",
        },
      ],
      works: ["Confessions", "City of God", "On the Trinity", "On Free Choice of the Will"],
    },
  },
  descartes: {
    name: "René Descartes",
    era: "1596-1650",
    origin: "France and the Netherlands",
    idea: "Methodical doubt opens a secure starting point for knowledge.",
    story: {
      summary:
        "René Descartes was an important seventeenth-century mathematician, natural philosopher and metaphysician. He did more than propose his famous method of doubt: he also helped create analytic geometry and a new picture of the material world.",
      chapters: [
        {
          title: "Searching for a secure foundation",
          body:
            "Descartes used doubt as a method: set aside whatever can be doubted in order to find a firm beginning for knowledge. From the recognition that the activity of thinking cannot be erased even while doubt is underway, he developed new arguments about mind, matter and God.",
        },
        {
          title: "Mathematics and natural philosophy",
          body:
            "In mathematics, Descartes developed techniques that opened the way for analytic geometry, connecting algebra with geometry. In natural philosophy, he published the sine law of refraction, explained the rainbow and proposed a mechanical model of a material world governed by universal laws.",
        },
        {
          title: "A turning point in modern philosophy",
          body:
            "The distinction between mind and matter in Descartes's system helped define the modern mind-body problem. His works became a starting point for many of the major debates in seventeenth- and eighteenth-century Europe.",
        },
      ],
      works: ["Discourse on the Method", "Meditations on First Philosophy", "Principles of Philosophy", "The Passions of the Soul"],
    },
  },
  spinoza: {
    name: "Baruch Spinoza",
    era: "1632-1677",
    origin: "Amsterdam, the Netherlands",
    idea: "Freedom grows as we understand the causes that shape our emotions and actions.",
    story: {
      summary:
        "Baruch Spinoza was one of the most radical thinkers of the early modern period. From a Portuguese Jewish family in Amsterdam, he developed a powerful naturalistic philosophical system concerning God, the world, emotions and freedom.",
      chapters: [
        {
          title: "Amsterdam and excommunication",
          body:
            "Spinoza was born in 1632 in Amsterdam's Portuguese Jewish community. At seventeen he had to end his formal studies to help with the family business. On July 27, 1656, the community issued a herem excluding him; the precise reasons are not known with complete certainty.",
        },
        {
          title: "A bold philosophical system",
          body:
            "Spinoza rejected the traditional idea of a transcendent, providential God and developed a philosophy often summarized by the phrase God or Nature. His Ethics is presented in geometrical form, with definitions, propositions and demonstrations.",
        },
        {
          title: "From passive emotion to understanding",
          body:
            "Spinoza does not promise that people can stand outside the order of nature. He seeks freedom in a clearer understanding of the causes shaping emotions and actions. That understanding opens a life less dependent on passive passions.",
        },
      ],
      works: ["Ethics", "Theological-Political Treatise", "Principles of Cartesian Philosophy", "Treatise on the Emendation of the Intellect"],
    },
  },
  rousseau: {
    name: "Jean-Jacques Rousseau",
    era: "1712-1778",
    origin: "Geneva and France",
    idea: "A legitimate society has to respect freedom and the general will of its citizens.",
    story: {
      summary:
        "Jean-Jacques Rousseau was an important Enlightenment philosopher, writer, composer and autobiographer. He asked a difficult question that remains modern: how can people live together under laws without losing their freedom?",
      chapters: [
        {
          title: "From Geneva to Paris",
          body:
            "Rousseau was born in the city-state of Geneva in 1712. His mother died only nine days after his birth. After an unsettled childhood and a harsh apprenticeship as an engraver, he left Geneva at sixteen, passed through many jobs and journeys, and eventually reached Paris and the figures of the Enlightenment.",
        },
        {
          title: "Inequality, education and freedom",
          body:
            "Rousseau criticized the ways social life can produce dependence, alienation and inequality. In The Social Contract, he considers the general will and the relationship between freedom and political authority. In Émile, he presents influential reflections on education.",
        },
        {
          title: "A powerful and complicated legacy",
          body:
            "Rousseau helped shape political thought, autobiographical literature and Romanticism. A paradox in his life also has to be faced directly: according to his account, all five of his children with Thérèse Levasseur were sent to a foundling hospital, a decision later used to criticize him.",
        },
      ],
      works: ["Discourse on the Origin of Inequality", "The Social Contract", "Émile", "Confessions"],
    },
  },
  kant: {
    name: "Immanuel Kant",
    era: "1724-1804",
    origin: "Königsberg, Prussia",
    idea: "Treat people as ends in themselves, never merely as tools.",
    story: {
      summary:
        "Immanuel Kant was born in Königsberg, then the capital of East Prussia, in 1724. From a city far from the major centers, he carried out an ambitious intellectual project: defining the limits of knowledge, the foundations of ethics and the relationship between freedom and the natural world.",
      chapters: [
        {
          title: "A scholar of Königsberg",
          body:
            "Kant was born into a family of modest means. He studied at the University of Königsberg, where philosophy then included mathematics, physics, logic, metaphysics, ethics and natural law. His long career of teaching and research took place mainly in that same city.",
        },
        {
          title: "The Copernican revolution in philosophy",
          body:
            "In the Critique of Pure Reason, Kant asks what conditions make experience and objective knowledge possible. Rather than treating the mind as a passive mirror, he analyzes the active role of cognitive structures in the way we experience the world.",
        },
        {
          title: "Autonomy and human dignity",
          body:
            "In ethics, Kant links freedom to the capacity to set and follow universal principles through reason. A famous formulation of the categorical imperative requires us never to treat humanity merely as a means, but always at the same time as an end.",
        },
      ],
      works: ["Critique of Pure Reason", "Groundwork of the Metaphysics of Morals", "Critique of Practical Reason", "Critique of Judgment"],
    },
  },
  hegel: {
    name: "G. W. F. Hegel",
    era: "1770-1831",
    origin: "Germany",
    idea: "Consciousness of freedom develops through conflict, negation and reconciliation in history.",
    story: {
      summary:
        "G. W. F. Hegel was a central figure in German idealism after Kant. He tried to understand thought, history, society and art as interconnected parts of a system in motion rather than as isolated fragments.",
      chapters: [
        {
          title: "Tübingen, Jena and the generation after Kant",
          body:
            "Hegel was born in Stuttgart in 1770 and studied philosophy and then theology in Tübingen from 1788 to 1793. There he befriended Friedrich Hölderlin and Friedrich Schelling. In 1801, Hegel moved to Jena, an important center of post-Kantian philosophy.",
        },
        {
          title: "Spirit does not stand still",
          body:
            "Hegel sees knowledge and social life as processes that develop through tension, negation and the overcoming of earlier limits. Interpretations of Hegel remain disputed, but one point is clear: his philosophy resists turning history into a list of unrelated events.",
        },
        {
          title: "A widely branching influence",
          body:
            "The Phenomenology of Spirit, Science of Logic and writings on right had an enormous impact on nineteenth- and twentieth-century philosophy. Hegel's successors moved in many directions, from political philosophy to theology and social criticism.",
        },
      ],
      works: ["Phenomenology of Spirit", "Science of Logic", "Encyclopedia of the Philosophical Sciences", "Elements of the Philosophy of Right"],
    },
  },
  kierkegaard: {
    name: "Søren Kierkegaard",
    era: "1813-1855",
    origin: "Copenhagen, Denmark",
    idea: "No abstract system can live an individual's choices on their behalf.",
    story: {
      summary:
        "Søren Kierkegaard spent most of his life in Copenhagen and wrote about becoming a finite, concrete individual. He did not want readers to take shelter in an abstract system; he wanted each person to face their own choice, anxiety, despair, responsibility and faith.",
      chapters: [
        {
          title: "A life around Copenhagen",
          body:
            "Kierkegaard was born on May 5, 1813, the youngest of seven children. He studied theology and philosophy at the University of Copenhagen and completed a dissertation on the concept of irony with constant reference to Socrates. Though qualified to become a pastor, he was never ordained.",
        },
        {
          title: "Regine Olsen and the limits of speculation",
          body:
            "In 1840, Kierkegaard became engaged to Regine Olsen and then broke off the engagement himself. His deeper reasons remain unclear and have generated much speculation. The relationship appears as a tension in the way readers approach many of his works, but Kierkegaard's entire philosophy should not be reduced to an unfinished love story.",
        },
        {
          title: "Writing in many voices",
          body:
            "Kierkegaard used pseudonyms and many genres to place different viewpoints beside one another. He analyzed aesthetic, ethical and religious ways of living while criticizing an age that, in his view, had forgotten the meaning of existing as an individual.",
        },
      ],
      works: ["Either/Or", "Fear and Trembling", "The Concept of Anxiety", "The Sickness unto Death"],
    },
  },
  nietzsche: {
    name: "Friedrich Nietzsche",
    era: "1844-1900",
    origin: "Germany and Switzerland",
    idea: "When old values falter, people have to bear the responsibility of creating new ones.",
    story: {
      summary:
        "Friedrich Nietzsche was a classical philologist who became one of the sharpest and most controversial voices in modern philosophy. He analyzed the origins of values, criticized many moral habits and forced readers to ask a difficult question: how will we live when old foundations are no longer self-evident?",
      chapters: [
        {
          title: "A young professor in Basel",
          body:
            "Nietzsche was born in Röcken in 1844. In 1869, at the age of twenty-four, he was appointed to a chair in classical philology at Basel. His first book, The Birth of Tragedy, caused controversy in 1872 by combining study of ancient Greece with hopes for a cultural renewal through art.",
        },
        {
          title: "Breaking with Wagner and leaving the academy",
          body:
            "Nietzsche was once close to Richard Wagner, but the relationship gradually fractured during the 1870s. Poor health led Nietzsche to resign his professorship in 1879. In the years that followed, he wrote aphoristic, psychologically acute and stylistically experimental works while moving constantly among European cities.",
        },
        {
          title: "Reading Nietzsche with care",
          body:
            "Nietzsche suffered a mental collapse in early 1889 and could no longer write during the remainder of his life. Concepts such as the will to power, the overhuman and eternal recurrence have to be read in specific texts and contexts; they have often been simplified or misused since.",
        },
      ],
      works: ["The Birth of Tragedy", "The Gay Science", "Thus Spoke Zarathustra", "On the Genealogy of Morality"],
    },
  },
  beauvoir: {
    name: "Simone de Beauvoir",
    era: "1908-1986",
    origin: "Paris, France",
    idea: "Identity is shaped by the way we live and by the social structures around us.",
    story: {
      summary:
        "Simone de Beauvoir was an important postwar French writer, philosopher, feminist, public intellectual and activist. Her work shows that freedom does not exist in a vacuum: it always takes place amid social limits, relationships with others and concrete responsibilities.",
      chapters: [
        {
          title: "An independent philosophical voice",
          body:
            "Beauvoir was born in Paris in 1908 and received a rigorous philosophical education. For a long time, she was viewed mainly through her relationship with Jean-Paul Sartre. Later scholarship has established her independent contributions to existentialism, phenomenology, ethics and feminist philosophy more clearly.",
        },
        {
          title: "Freedom has to enter concrete life",
          body:
            "In The Ethics of Ambiguity, Beauvoir analyzes freedom together with responsibility toward others. In The Second Sex in 1949, she studies the way women have been positioned as the Other through history and culture, turning the question of freedom into a concrete social issue.",
        },
        {
          title: "Writing across many forms",
          body:
            "Beauvoir did not write philosophical essays alone. Novels, memoirs, journalism and work on old age all helped her investigate lived experience, finitude and social structures that often go unnoticed. Her legacy continues to expand debates within philosophy and beyond it.",
        },
      ],
      works: ["The Ethics of Ambiguity", "The Second Sex", "She Came to Stay", "The Coming of Age"],
    },
  },
};

const englishStages: PhilosopherStage[] = vietnameseStages.map((stage) => {
  const translation = englishStageTranslations[stage.id];

  return {
    ...stage,
    ...translation,
    story: {
      ...translation.story,
      sourceUrl: stage.story.sourceUrl,
    },
  };
});

export const localizedContent: Record<
  Locale,
  { difficulties: Difficulty[]; stages: PhilosopherStage[] }
> = {
  vi: {
    difficulties: vietnameseDifficulties,
    stages: vietnameseStages,
  },
  en: {
    difficulties: englishDifficulties,
    stages: englishStages,
  },
};
