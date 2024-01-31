"use client";

import { CategoriesProvider } from "$components/nav/categories.context";
import { Category } from "$components/nav/category";
import { SearchCategory } from "$components/utils";
import { ScrollArea } from "$shadcn/ui/scroll-area";
import { cn } from "$shadcn/utils";
import { Navigation } from "$types";
import { useMemo, useState } from "react";

interface CategoriesProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  navigation: Navigation[];
}

export function Categories({ className, navigation, ...rest }: CategoriesProps) {
  const [search, setSearch] = useState("");

  const navigationFiltered = useMemo(
    () => navigation.filter(nav => nav.cat_name_en.includes(search) || nav.cat_id.toString().includes(search)),
    [search]
  );

  return (
    <CategoriesProvider>
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
          <SearchCategory
            placeholder="Search by Categories"
            value={search}
            onChange={evt => setSearch(evt.target.value)}
          />
        </div>

        <ScrollArea className="mb-2 px-4 pb-2">
          <ul>
            {navigationFiltered.map(nav => (
              <Category nav={nav} key={nav.cat_id} />
            ))}
          </ul>
        </ScrollArea>
      </aside>
    </CategoriesProvider>
  );
}
