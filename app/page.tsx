import { Category } from "$components/category";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Category className="h-[calc(var(--max-aside-hight)-(var(--top-nav-size,0px)+var(--layout-gap,0px)))] max-lg:hidden" />
      <main className="h-screen w-full bg-amber-200"></main>
    </Fragment>
  );
}
