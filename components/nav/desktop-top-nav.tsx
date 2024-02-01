"use client";

import aboutIcon from "$assets/icons/about.svg";
import copyrightIcon from "$assets/icons/copyright.svg";
import creditIcon from "$assets/icons/credit.svg";
import downloadIcon from "$assets/icons/download.svg";
import duaLogo from "$assets/icons/dua-logo.svg";
import openLogo from "$assets/icons/open.svg";
import privacyIcon from "$assets/icons/privacy.svg";
import profileIcon from "$assets/icons/profile.svg";
import projectsIcon from "$assets/icons/projects.svg";
import rectAngle from "$assets/icons/rectangle.svg";
import settingIcon from "$assets/icons/settings.svg";
import supportIcon from "$assets/icons/support.svg";

import { Settings } from "$components/settings";
import { SearchGlobal } from "$components/utils";
import { Popover, PopoverContent } from "$shadcn/ui/popover";
import { Sheet, SheetContent, SheetTrigger } from "$shadcn/ui/sheet";
import { cn } from "$shadcn/utils";
import { Navigation } from "$types";
import { PopoverTrigger } from "@radix-ui/react-popover";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Categories } from "./categories";

const items = [
  { text: "Support Us", icon: supportIcon },
  { text: "Download Dua App", icon: downloadIcon },
  { text: "Privacy Policy", icon: privacyIcon },
  { text: "Thanks & Credits", icon: creditIcon },
  { text: "About Us", icon: aboutIcon },
  { text: "Copyright Warning", icon: copyrightIcon },
  { text: "Our Other Projects", icon: projectsIcon },
];

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
        <Popover>
          <PopoverTrigger asChild>
            <button className="ml-auto flex items-center gap-1 rounded-md ">
              <Image src={profileIcon} alt="profile" />
              <Image src={rectAngle} alt="arrow" className="h-3 w-3" />
            </button>
          </PopoverTrigger>
          <PopoverContent align="end" side="bottom">
            <div className="space-y-1">
              {items.map(item => (
                <ProfileItem key={item.text} text={item.text} icon={item.icon} />
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}

export function ProfileItem({ text, icon }: { text: string; icon: any }) {
  return (
    <Link
      href="#"
      className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 transition duration-150 ease-in-out hover:bg-muted"
    >
      <Image className="flex h-5 w-5 items-center justify-center object-contain text-white" src={icon} alt={"link"} />
      <span className="text-sm text-foreground">{text}</span>
    </Link>
  );
}
