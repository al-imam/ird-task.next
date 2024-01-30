import { Provider } from "$context";
import "$styles/global.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Dua & Ruqyah | All Duas Collection",
  icons: {
    shortcut: "/favicon/favicon-32x32.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[inter.variable].join(" ")} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      </head>
      <body
        className={`bg-background font-sans ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
