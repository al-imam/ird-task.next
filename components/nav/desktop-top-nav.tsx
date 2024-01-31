"use client";

import duaLogo from "$assets/icons/dua-logo.svg";
import openLogo from "$assets/icons/open.svg";
import profileIcon from "$assets/icons/profile.svg";
import rectAngle from "$assets/icons/rectangle.svg";
import settingIcon from "$assets/icons/settings.svg";
import { Settings } from "$components/settings";
import { SearchGlobal } from "$components/utils";
import { Sheet, SheetContent, SheetTrigger } from "$shadcn/ui/sheet";
import { cn } from "$shadcn/utils";
import { Navigation } from "$types";
import Image from "next/image";
import { useState } from "react";
import { Categories } from "./categories";

interface DesktopTopNavProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  navigation: Navigation[];
}

export function DesktopTopNav({ className, navigation, ...rest }: DesktopTopNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={cn("flex items-center rounded-3xl", className)} {...rest}>
      <div className="mr-4 max-lg:hidden max-sm:mr-auto xl:hidden">
        <Image src={duaLogo} alt="dua-logo" className="min-h-[4.5625rem] min-w-[4.5625rem]" />
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="mr-4 rounded-md p-1 max-lg:mr-auto lg:hidden">
            <Image src={openLogo} alt="dua-logo" className="min-h-8 min-w-8" />
          </button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="w-[min(95%,35rem)] overflow-hidden rounded-r-2xl border-0 p-0 sm:max-w-full"
        >
          <Categories navigation={navigation} close={() => setIsOpen(false)} className="h-screen rounded-none" />
        </SheetContent>
      </Sheet>

      <h2 className="mr-auto text-2xl font-semibold text-foreground max-lg:hidden">Dua Page</h2>

      <SearchGlobal placeholder="Search by dua name" className="max-sm:hidden" />

      <Sheet>
        <SheetTrigger asChild>
          <button className="mx-8 rounded-full 2xl:hidden">
            <Image src={settingIcon} alt="setting" />
            <span className="sr-only">open setting</span>
          </button>
        </SheetTrigger>
        <SheetContent className="w-[min(95%,400px)] rounded-l-2xl">
          <Settings className="rounded-none border-0 p-0" />
        </SheetContent>
      </Sheet>

      <div className="h-full 2xl:w-[calc(var(--layout-gap)+330px)]">
        <button className="ml-auto flex items-center gap-1 rounded-md ">
          <Image src={profileIcon} alt="profile" />
          <Image src={rectAngle} alt="arrow" className="h-3 w-3" />
        </button>
      </div>
    </nav>
  );
}
