"use client";

import bookmarkIcon from "$assets/icons/bookmark.svg";
import copyIcon from "$assets/icons/copy.svg";
import planIcon from "$assets/icons/plan.svg";
import reportIcon from "$assets/icons/report.svg";
import shareIcon from "$assets/icons/share.svg";
import { BookmarkAction } from "$components/bookmark-model";
import { cn } from "$shadcn/utils";
import Image from "next/image";
import { useState } from "react";

interface DuaCardActionProps extends React.ComponentProps<"div"> {}

export function DuaCardAction({ className, ...rest }: DuaCardActionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...rest} className={cn("ml-auto flex h-full items-center justify-between gap-4 sm:gap-8", className)}>
      <button className="transition-transform hover:scale-105 focus-visible:ring-0">
        <Image src={copyIcon} alt="copy" />
      </button>

      <BookmarkAction isOpen={isOpen} setIsOpen={setIsOpen}>
        <button className="transition-transform hover:scale-105 focus-visible:ring-0">
          <Image src={bookmarkIcon} alt="bookmark" />
        </button>
      </BookmarkAction>

      <button className="transition-transform hover:scale-105 focus-visible:ring-0">
        <Image src={planIcon} alt="memorize" />
      </button>
      <button className="transition-transform hover:scale-105 focus-visible:ring-0">
        <Image src={shareIcon} alt="share" />
      </button>
      <button className="transition-transform hover:scale-105 focus-visible:ring-0">
        <Image src={reportIcon} alt="report" />
      </button>
    </div>
  );
}
