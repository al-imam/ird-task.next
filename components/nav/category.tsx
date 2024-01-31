"use client";

import { SubCategory } from "$components/nav/sub-category";
import { cn } from "$shadcn/utils";
import { Navigation } from "$types";
import { joinUrl } from "$util";
import Link from "next/link";
import slugify from "slugify";
import { useCategory } from "./categories.context";

interface CategoryProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  nav: Navigation;
  close: () => void;
}

export function Category({ nav, className, close, ...rest }: CategoryProps) {
  const { setActiveCat, active } = useCategory();

  const isActive = nav.cat_id === active.cat;

  return (
    <li
      className="flex flex-col py-2"
      onClick={() => {
        setActiveCat(nav.cat_id);
        close();
      }}
    >
      <Link
        href={joinUrl("/", slugify(nav.cat_name_en, { lower: true }), `?cat=${nav.cat_id}`)}
        {...rest}
        className={cn(
          "group flex items-center gap-2.5 rounded-[0.625rem] p-2.5 shadow-sm hover:bg-muted-selected",
          { "bg-muted-selected": isActive },
          className
        )}
      >
        <div className="h-[3.75rem] rounded-[0.625rem] bg-[rgb(var(--list-img-bg))] p-2.5">
          <img src={`/icons/${nav.cat_icon}.svg`} alt={nav.cat_name_en} className="" />
        </div>
        <div className={cn("flex-1 border-r pr-1 group-hover:border-r-0", { "border-r-0": isActive })}>
          <span
            className={cn("line-clamp-1 text-base font-semibold group-hover:text-primary", {
              "text-primary": isActive,
            })}
          >
            {nav.cat_name_en}
          </span>
          <span className="line-clamp-1 text-sm text-muted-foreground-selected">Subcategory: {nav.no_of_subcat}</span>
        </div>
        <div className="ml-1 flex flex-col items-center">
          <span className="text-base font-semibold text-foreground">{nav.cat_id}</span>
          <span className="text-sm text-muted-foreground-selected">Duas</span>
        </div>
      </Link>
      {isActive && nav.sub_categories.length > 0 && (
        <ul className="ml-6 flex flex-col gap-2 border-l border-dashed border-primary pt-3">
          {nav.sub_categories.map(sub => (
            <SubCategory
              nav={sub}
              catName={slugify(nav.cat_name_en, { lower: true })}
              catId={nav.cat_id}
              key={sub.subcat_id}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
