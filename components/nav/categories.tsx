"use client";

import { CategoriesProvider } from "$components/nav/categories.context";
import { Category } from "$components/nav/category";
import { SearchCategory } from "$components/utils";
import { ScrollArea } from "$shadcn/ui/scroll-area";
import { cn } from "$shadcn/utils";
import { Navigation } from "$types";
import { rand } from "$util";
import { useMemo, useState } from "react";

interface CategoriesProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  navigation: Navigation[];
  close?: () => void;
}

export function Categories({ className, navigation, close = () => {}, ...rest }: CategoriesProps) {
  const [search, setSearch] = useState("");

  const navigationFiltered = useMemo(
    () =>
      navigation.filter(
        nav =>
          nav.cat_name_en.toLowerCase().includes(search.toLowerCase()) ||
          nav.cat_id.toString().includes(search.toLowerCase())
      ),
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
        <div className="bg-primary p-6 text-center lg:p-[1.125rem]">
          <span className="text-lg font-semibold text-white lg:text-base">Categories</span>
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
              <Category nav={nav} key={nav.cat_id} close={close} />
            ))}
          </ul>
        </ScrollArea>
      </aside>
    </CategoriesProvider>
  );
}

export function CategoriesSkeleton({ className }: { className: string }) {
  return (
    <aside
      className={cn(
        "flex flex-col gap-4 overflow-hidden rounded-xl border bg-background [--list-img-bg:207_224_229]",
        className
      )}
    >
      <div className="bg-primary p-6 text-center lg:p-[1.125rem]">
        <span className="text-lg font-semibold text-white lg:text-base">Categories</span>
      </div>
      <div className="px-4">
        <SearchCategory readOnly placeholder="Search by Categories" />
      </div>

      <ScrollArea className="mb-2 px-4 pb-2">
        <ul>
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <li key={index} className="flex cursor-pointer flex-col py-2">
                <div
                  className={cn(
                    "group flex items-center gap-2.5 rounded-[0.625rem] p-2.5 shadow-sm hover:bg-muted-selected"
                  )}
                >
                  <div className="h-[3.75rem] w-[3.75rem] rounded-[0.625rem] bg-[rgb(var(--list-img-bg))] p-2.5" />
                  <div className={cn("w-full space-y-2")}>
                    <div
                      className={cn("h-3.5 rounded-md bg-[rgb(var(--list-img-bg))]")}
                      style={{ width: `${rand(70, 90)}%` }}
                    />
                    <div
                      className={cn("h-3.5 rounded-md bg-[rgb(var(--list-img-bg))]")}
                      style={{ width: `${rand(40, 80)}%` }}
                    />
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </ScrollArea>
    </aside>
  );
}
