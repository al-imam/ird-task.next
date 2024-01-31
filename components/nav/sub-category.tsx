"use client";

import { cn } from "$shadcn/utils";
import { Navigation } from "$types";
import Link from "next/link";
import slugify from "slugify";
import { useCategory } from "./categories.context";

interface SubCategoryProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  nav: Navigation["sub_categories"][0];
  catName: string;
  catId: number;
}

export function SubCategory({ className, nav, catId, catName, ...rest }: SubCategoryProps) {
  const { setActiveSub, active } = useCategory();
  const isActive = nav.subcat_id === active.sub && catId === active.cat;

  return (
    <li className="relative pl-4 before:absolute before:inset-0 before:-left-[3px] before:my-auto before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary before:content-['']">
      <Link
        href={`/${catName}?cat=${catId}&sub=${nav.subcat_id}`}
        onClick={() => {
          setActiveSub(nav.subcat_id);
          setTimeout(() => {
            const element = document.getElementById(slugify(nav.subcat_name_en, { lower: true }));
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }}
        {...rest}
        className={cn(
          "relative block text-base font-medium leading-snug hover:text-primary",
          { "text-primary": isActive },
          className
        )}
      >
        {nav.subcat_name_en}
      </Link>
    </li>
  );
}
