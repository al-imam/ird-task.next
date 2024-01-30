import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <aside className="h-[calc(var(--max-aside-hight)-(var(--top-nav-size,0px)+var(--layout-gap,0px)))] w-full rounded-3xl border bg-background max-lg:hidden"></aside>
      <main className="h-screen w-full bg-amber-200"></main>
    </Fragment>
  );
}
