import { Provider } from "$context";
import "react-h5-audio-player/lib/styles.css";

import "$styles/global.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

export const metadata: Metadata = {
  title: "Dua & Ruqyah | All Duas Collection",
  icons: {
    shortcut: "/icons/dua-logo.svg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
});

const meQuran = LocalFont({
  src: "../public/fonts/me_quran-regular.ttf",
  variable: "--font-me-quran",
  preload: true,
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[inter.variable, meQuran.variable].join(" ")} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/dua-logo.svg" />
      </head>
      <body
        className={`grid h-screen content-between font-sans [--padding-edge:1rem] xl:[--padding-edge:2.5rem] ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
