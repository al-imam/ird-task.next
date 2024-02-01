"use client";

import tickMarkIcon from "$assets/icons/tick-mark.svg";
import { Button } from "$shadcn/ui/button";
import { Dialog, DialogContent } from "$shadcn/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "$shadcn/ui/drawer";
import { Input } from "$shadcn/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "$shadcn/ui/select";
import { DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { useMedia } from "react-use";

interface ActionModelProps {
  close: () => void;
}

function ActionModel({ close }: ActionModelProps) {
  const [color, setColor] = useState<string>("primary");

  return (
    <div className="relative flex flex-col gap-4 px-4 pb-4  pt-8 sm:px-8 sm:pb-12 sm:pt-16">
      <div className="space-y-1">
        <span className="text-base font-medium text-foreground">Folder Name</span>
        <Select defaultValue="Favorite">
          <SelectTrigger>
            <SelectValue placeholder="Select folder" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Favorite">Favorite</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <span className="-my-1">Or,</span>

      <div className="space-y-1">
        <Input type="text" name="folder" maxLength={15} placeholder="Create New Bookmark Folder" />
      </div>

      <div className="space-y-2">
        <span className="text-base font-medium">Change Folder Color</span>
        <div className="flex justify-between">
          <span
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-primary"
            onClick={() => setColor("primary")}
          >
            {color === "primary" && <Image src={tickMarkIcon} alt="tick-mark" />}
          </span>
          <span
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-[#FFC107]"
            onClick={() => setColor("[#FFC107]")}
          >
            {color === "[#FFC107]" && <Image src={tickMarkIcon} alt="tick-mark" />}
          </span>
          <span
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-[#9C27B0]"
            onClick={() => setColor("[#9C27B0]")}
          >
            {color === "[#9C27B0]" && <Image src={tickMarkIcon} alt="tick-mark" />}
          </span>
          <span
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-[#2196F3]"
            onClick={() => setColor("[#2196F3]")}
          >
            {color === "[#2196F3]" && <Image src={tickMarkIcon} alt="tick-mark" />}
          </span>
          <span
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-[#E91E63]"
            onClick={() => setColor("[#E91E63]")}
          >
            {color === "[#E91E63]" && <Image src={tickMarkIcon} alt="tick-mark" />}
          </span>
          <span
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-[#3F51B5]"
            onClick={() => setColor("[#3F51B5]")}
          >
            {color === "[#3F51B5]" && <Image src={tickMarkIcon} alt="tick-mark" />}
          </span>
          <span
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-[#00BCD4]"
            onClick={() => setColor("[#00BCD4]")}
          >
            {color === "[#00BCD4]" && <Image src={tickMarkIcon} alt="tick-mark" />}
          </span>
          <span
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-[#8BC34A]"
            onClick={() => setColor("[#8BC34A]")}
          >
            {color === "[#8BC34A]" && <Image src={tickMarkIcon} alt="tick-mark" />}
          </span>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-6 max-sm:flex-col-reverse sm:pt-2">
        <Button variant="outline" onClick={close}>
          Cancel
        </Button>
        <Button>Save</Button>
      </div>
    </div>
  );
}

interface BookmarkActionProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  children: React.ReactNode;
}

export function BookmarkAction({ isOpen, setIsOpen, children }: BookmarkActionProps) {
  const isDesktop = useMedia("(min-width: 640px)", false);

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="border-0 p-0 shadow">
          <ActionModel close={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <ActionModel close={() => setIsOpen(false)} />
      </DrawerContent>
    </Drawer>
  );
}
