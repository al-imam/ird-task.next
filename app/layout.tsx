import { DesktopTopNav, Icons, SideIconsNav } from "$components/nav";
import { Categories } from "$components/nav/categories";
import { Settings } from "$components/settings";
import { Provider } from "$context";
import "react-h5-audio-player/lib/styles.css";

import "$styles/global.css";
import { Navigation } from "$types";
import { joinUrl } from "$util";
import axios from "axios";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

export const revalidate = "";

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { data } = await axios.get<Navigation[]>(joinUrl(process.env.NEXT_PUBLIC_API_URL, "navigation"));

  return (
    <html lang="en" className={[inter.variable, meQuran.variable].join(" ")} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      </head>
      <body
        className={`grid h-screen content-between font-sans [--padding-edge:1rem] xl:[--padding-edge:2.5rem] ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
      >
        <Provider>
          <div className="bg-background px-[--padding-edge] py-4 xl:hidden">
            <DesktopTopNav navigation={data} className="top-0" />
          </div>
          <div className="xl:layout-xl lg:layout-lg 2xl:layout-2xl grid  w-full gap-[--layout-gap] overflow-hidden p-[--padding-edge] pb-0">
            <SideIconsNav className="row-span-full mb-[--padding-edge] max-xl:hidden" />
            <DesktopTopNav navigation={data} className="col-start-2 col-end-[-1] max-xl:hidden" />
            <Categories navigation={data} className="h-[calc(100%-var(--padding-edge,0px))] max-lg:hidden" />
            {children}
            <Settings className="h-[calc(100%-var(--padding-edge,0px))] max-2xl:hidden" />
          </div>
          <div className="rounded-t-3xl bg-background px-[--padding-edge] py-4 xl:hidden">
            <Icons className="flex-row justify-between gap-1 px-0 py-2" />
          </div>
        </Provider>
      </body>
    </html>
  );
}
