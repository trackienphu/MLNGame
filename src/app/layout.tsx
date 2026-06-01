import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import "./globals.css";

const vietnamSans = Be_Vietnam_Pro({
  variable: "--font-vietnam-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
});

const siteUrl = "https://mln111.tkp217.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Mảnh Ghép Minh Triết",
  title: {
    default: "Mảnh Ghép Minh Triết | Pieces of Wisdom",
    template: "%s | Mảnh Ghép Minh Triết",
  },
  description:
    "Khôi phục chân dung 16 triết gia qua game sliding puzzle song ngữ Việt - Anh, thu thập sao và mở khóa những câu chuyện tư tưởng. Restore 16 philosopher portraits and unlock their stories.",
  keywords: [
    "Mảnh Ghép Minh Triết",
    "game triết học",
    "game ghép hình",
    "sliding puzzle",
    "triết gia",
    "philosophy game",
    "educational game",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Mảnh Ghép Minh Triết" }],
  creator: "Mảnh Ghép Minh Triết",
  publisher: "Mảnh Ghép Minh Triết",
  category: "game",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: "Mảnh Ghép Minh Triết",
    title: "Mảnh Ghép Minh Triết | Pieces of Wisdom",
    description:
      "Khôi phục chân dung 16 triết gia, chinh phục các bàn ghép hình và mở khóa những câu chuyện tư tưởng.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mảnh Ghép Minh Triết | Pieces of Wisdom",
    description:
      "Restore 16 philosopher portraits, solve sliding puzzles, and unlock the stories behind their ideas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${vietnamSans.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
