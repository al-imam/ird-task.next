"use client";

import searchIcon from "$assets/icons/search.svg";
import Image from "next/image";
import { forwardRef, useId, useState } from "react";
import { cn } from "shadcn/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchCategory = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={cn(
        "group flex h-12 w-full gap-1.5 rounded-md border-none bg-background text-sm shadow outline outline-1 outline-border",
        { "outline-2 outline-primary": isFocused },
        className
      )}
    >
      <div className="my-1 ml-2 mr-0 flex cursor-pointer items-center justify-center rounded-sm px-1 focus-visible:outline-none">
        <Image src={searchIcon} alt="search" />
      </div>
      <input
        id={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type={type}
        className={cn("focus-visible: w-full !p-4 !pl-0  [all:unset] group-hover:cursor-text", { "": isFocused })}
        ref={ref}
        {...props}
      />
    </label>
  );
});

const SearchGlobal = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={cn(
        "group flex h-full gap-1.5 rounded-md border-none bg-background text-sm shadow outline outline-1 outline-border",
        { "outline-2 outline-primary": isFocused },
        className
      )}
    >
      <input
        id={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type={type}
        className={cn("focus-visible: !p-4 !pr-0 [all:unset]  group-hover:cursor-text", { "": isFocused })}
        ref={ref}
        {...props}
      />
      <button className="m-1 ml-0 flex cursor-pointer items-center justify-center rounded-sm bg-muted px-3 focus-visible:outline-none">
        <Image src={searchIcon} alt="search" />
      </button>
    </label>
  );
});

SearchCategory.displayName = "search-category";
SearchGlobal.displayName = "search-global";

export { SearchCategory, SearchGlobal };
