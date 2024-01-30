"use client";

import duarGurutto from "$assets/icons/duar_gurutto.svg";
import { SearchCategory } from "$components/utils";
import { ScrollArea } from "$shadcn/ui/scroll-area";
import { cn } from "$shadcn/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CategoryProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export function Category({ className, ...rest }: CategoryProps) {
  return (
    <aside
      className={cn(
        "flex flex-col gap-4 overflow-hidden rounded-xl border bg-background [--list-img-bg:207_224_229]",
        className
      )}
      {...rest}
    >
      <div className="bg-primary p-[1.125rem] text-center">
        <span className="text-base font-semibold text-white">Categories</span>
      </div>
      <div className="px-4">
        <SearchCategory placeholder="Search by Categories" />
      </div>

      <ScrollArea className="mb-2 px-4 pb-2">
        <ul>
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ul>
      </ScrollArea>
    </aside>
  );
}

function CategoryItem() {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className="flex flex-col" onClick={() => setIsActive(true)}>
      <Link
        href="#"
        className={cn("hover:bg-muted-selected group flex items-center gap-2.5 rounded-[0.625rem] p-2.5", {
          "bg-muted-selected": isActive,
        })}
      >
        <div className="h-[3.75rem] rounded-[0.625rem] bg-[rgb(var(--list-img-bg))] p-2.5">
          <Image src={duarGurutto} alt="duar-gurutto" className="" />
        </div>
        <div className="flex-1">
          <span
            className={cn("line-clamp-1 text-base font-semibold group-hover:text-primary", {
              "text-primary": isActive,
            })}
          >
            Dua&apos;s Importance
          </span>
          <span className="text-muted-foreground-selected line-clamp-1 text-sm">Subcategory: 7</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-base font-semibold text-foreground">15</span>
          <span className="text-muted-foreground-selected text-sm">Duas</span>
        </div>
      </Link>
      {isActive && (
        <ul className="ml-6 flex flex-col gap-2 border-l border-dashed border-primary py-2">
          <SubCategoryItem text="The most important thing to ask Allah for" href={"#"} />
          <SubCategoryItem text="Dua of good outcome in all deeds" href={"#"} />
          <SubCategoryItem text="Ask for paradise & protection from fire" href={"#"} />
        </ul>
      )}
    </li>
  );
}

interface SubCategoryProps extends React.ComponentProps<typeof Link> {
  text: string;
}

function SubCategoryItem({ className, href, text, ...rest }: SubCategoryProps) {
  return (
    <li>
      <Link
        href={href}
        {...rest}
        className={cn(
          "relative block pl-3 text-base font-medium leading-snug before:absolute before:inset-0 before:-left-[3px] before:my-auto before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary before:content-[''] hover:text-primary",
          className
        )}
      >
        {text}
      </Link>
    </li>
  );
}
