import "react-h5-audio-player/lib/styles.css";

import { DesktopTopNav, Icons, SideIconsNav } from "$components/nav";
import { CategoriesNav } from "$components/nav/categories-nav";
import { CategoriesSkeleton } from "$components/nav/categories-skeleton";
import { Nav } from "$components/nav/nav";
import { Settings } from "$components/settings";
import { Provider } from "$context";
import "$styles/global.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Suspense } from "react";

export const revalidate = Infinity;

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
        <Provider>
          <div className="bg-background px-[--padding-edge] py-4 xl:hidden">
            <Suspense fallback={<DesktopTopNav className="top-0" />}>
              <Nav className="top-0" />
            </Suspense>
          </div>
          <div className="xl:layout-xl lg:layout-lg 2xl:layout-2xl grid  w-full gap-[--layout-gap] overflow-hidden p-[--padding-edge] pb-0">
            <SideIconsNav className="row-span-full mb-[--padding-edge] max-xl:hidden" />
            <Suspense fallback={<DesktopTopNav className="col-start-2 col-end-[-1] max-xl:hidden" />}>
              <Nav className="col-start-2 col-end-[-1] max-xl:hidden" />
            </Suspense>
            <Suspense
              fallback={<CategoriesSkeleton className="h-[calc(100%-var(--padding-edge,0px))] max-lg:hidden" />}
            >
              <CategoriesNav className="h-[calc(100%-var(--padding-edge,0px))] max-lg:hidden" />
            </Suspense>
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
