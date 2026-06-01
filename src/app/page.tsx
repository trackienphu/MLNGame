import { PhilosopherPuzzleGame } from "@/components/philosopher-puzzle-game";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mảnh Ghép Minh Triết",
    alternateName: "Pieces of Wisdom",
    url: "https://mln111.tkp217.com",
    inLanguage: ["vi", "en"],
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Mảnh Ghép Minh Triết",
    alternateName: "Pieces of Wisdom",
    url: "https://mln111.tkp217.com",
    image: "https://mln111.tkp217.com/opengraph-image.jpg",
    description:
      "A bilingual educational sliding-puzzle game about restoring philosopher portraits and unlocking their stories.",
    applicationCategory: "Game",
    operatingSystem: "Web browser",
    inLanguage: ["vi", "en"],
    genre: ["Puzzle", "Educational"],
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <PhilosopherPuzzleGame />
    </>
  );
}
