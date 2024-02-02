import { DesktopTopNav, Icons, SideIconsNav } from "$components/nav";
import { Categories } from "$components/nav/categories";
import { Settings } from "$components/settings";
import { ScrollArea } from "$shadcn/ui/scroll-area";
import { Navigation } from "$types";
import { joinUrl } from "$util";
import axios from "axios";
import { Fragment } from "react";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const { data } = await axios.get<Navigation[]>(joinUrl(process.env.NEXT_PUBLIC_API_URL, "navigation"));

  return (
    <Fragment>
      <div className="bg-background px-[--padding-edge] py-4 xl:hidden">
        <DesktopTopNav navigation={data} className="top-0" />
      </div>
      <div className="xl:layout-xl lg:layout-lg 2xl:layout-2xl grid  w-full gap-[--layout-gap] overflow-hidden p-[--padding-edge] pb-0">
        <SideIconsNav className="row-span-full mb-[--padding-edge] max-xl:hidden" />
        <DesktopTopNav navigation={data} className="col-start-2 col-end-[-1] max-xl:hidden" />
        <Categories navigation={data} className="h-[calc(100%-var(--padding-edge,0px))] max-lg:hidden" />
        <ScrollArea scrollBarClassName="h-[calc(100%-var(--padding-edge,0px))]">
          {children} <div className="h-[--padding-edge]" />
        </ScrollArea>
        <Settings className="h-[calc(100%-var(--padding-edge,0px))] max-2xl:hidden" />
      </div>
      <div className="rounded-t-3xl bg-background px-[--padding-edge] py-4 xl:hidden">
        <Icons className="flex-row justify-between gap-1 px-0 py-2" />
      </div>
    </Fragment>
  );
}
