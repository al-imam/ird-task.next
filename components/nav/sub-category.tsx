"use client";

import { cn } from "$shadcn/utils";
import { Navigation } from "$types";
import Link from "next/link";
import { useCategory } from "./categories.context";
import { DuaName } from "./dua-name";

interface SubCategoryProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  nav: Navigation["sub_categories"][0];
  catName: string;
}

export function SubCategory({ className, nav, catName, ...rest }: SubCategoryProps) {
  const { setActiveSub, active } = useCategory();
  const isActive = nav.subcat_id === active.sub && nav.cat_id === active.cat;

  return (
    <li className="relative pl-4 before:absolute before:inset-0 before:-left-[3px] before:my-auto before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary before:content-['']">
      <Link
        href={`/${catName}?cat=${nav.cat_id}&sub=${nav.subcat_id}`}
        onClick={() => setActiveSub(nav.subcat_id)}
        {...rest}
        className={cn(
          "relative block text-base font-medium leading-snug hover:text-primary",
          { "text-primary": isActive },
          className
        )}
      >
        {nav.subcat_name_en}
      </Link>
      {isActive && (
        <ul className="flex flex-col gap-2 py-3">
          {nav.duas.map(dua => (
            <DuaName key={dua.id} nav={dua} catName={catName} />
          ))}
        </ul>
      )}
    </li>
  );
}
