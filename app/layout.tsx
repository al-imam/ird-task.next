import { DesktopTopNav, SideIconsNav } from "$components/nav";
import { Settings } from "$components/settings";
import { Provider } from "$context";
import "$styles/global.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

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

const meQuran = LocalFont({
  src: "../public/fonts/me_quran-regular.ttf",
  variable: "--font-me-quran",
  preload: true,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[inter.variable, meQuran.variable].join(" ")} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      </head>
      <body className={`font-sans ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>
        <Provider>
          <div className="xl:layout-xl lg:layout-lg 2xl:layout-2xl grid gap-[--layout-gap] p-[--padding-edge] pb-0 [--padding-edge:1rem] xl:[--padding-edge:2.5rem]">
            <SideIconsNav className="row-span-full mb-[--padding-edge] max-xl:hidden" />
            <DesktopTopNav className="col-start-2 col-end-[-1] max-xl:hidden" />
            {children}
            <Settings className="mb-[--padding-edge] h-[calc(var(--max-aside-hight)-(var(--top-nav-size,0px)+var(--layout-gap,0px)))] max-2xl:hidden" />
          </div>
        </Provider>
      </body>
    </html>
  );
}
