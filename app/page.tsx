import { Category } from "$components/category";
import { DuaCard } from "$components/dua-card";
import { ScrollArea } from "$shadcn/ui/scroll-area";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Category className="mb-[--padding-edge] h-[calc(var(--max-aside-hight)-(var(--top-nav-size,0px)+var(--layout-gap,0px)))] max-lg:hidden" />
      <ScrollArea className="">
        <main className="flex flex-col gap-3 pb-[--padding-edge]">
          <div className="rounded-[0.625rem] border bg-background px-8 py-4">
            <p className="text-base">
              <span className="font-medium text-primary">Section:</span> The servant is dependent on his Lord
            </p>
          </div>
          <DuaCard />
          <DuaCard />
          <DuaCard />
          <DuaCard />
          <DuaCard />
        </main>
      </ScrollArea>
    </Fragment>
  );
}
