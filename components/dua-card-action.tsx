"use client";

import copyIcon from "$assets/icons/copy.svg";
import planIcon from "$assets/icons/plan.svg";
import reportIcon from "$assets/icons/report.svg";
import shareIcon from "$assets/icons/share.svg";
import { BookmarkAction } from "$components/bookmark-model";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "$shadcn/ui/tooltip";
import { cn } from "$shadcn/utils";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

function copy(text: string) {
  toast.success("Copied to clipboard");
  if (navigator && navigator.clipboard) return navigator.clipboard.writeText(text);
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
}

interface DuaCardActionProps extends React.ComponentProps<"div"> {
  textToCopy: string;
}

export function DuaCardAction({ className, textToCopy, ...rest }: DuaCardActionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TooltipProvider>
      <div {...rest} className={cn("ml-auto flex h-full items-center justify-between gap-4 sm:gap-8", className)}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => copy(textToCopy)}
              className="transition-transform hover:scale-[1.02] focus-visible:ring-0"
            >
              <Image src={copyIcon} alt="copy" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="shadow">Copy</TooltipContent>
        </Tooltip>

        <BookmarkAction isOpen={isOpen} setIsOpen={setIsOpen} />

        <Tooltip>
          <TooltipTrigger asChild>
            <button className="transition-transform hover:scale-[1.02] focus-visible:ring-0">
              <Image src={planIcon} alt="memorize" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="shadow">Memorize</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button className="transition-transform hover:scale-[1.02] focus-visible:ring-0">
              <Image src={shareIcon} alt="share" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="shadow">Share</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button className="transition-transform hover:scale-[1.02] focus-visible:ring-0">
              <Image src={reportIcon} alt="report" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="shadow">Report</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
