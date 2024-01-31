"use client";

import { cn } from "$shadcn/utils";
import { Navigation } from "$types";
import Link from "next/link";
import { useCategory } from "./categories.context";

interface DuaNameProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  nav: Navigation["sub_categories"][0]["duas"][0];
  catName: string;
  catId: number;
}

export function DuaName({ className, nav, catId, catName, ...rest }: DuaNameProps) {
  const { setActiveDua, active } = useCategory();

  const isActive = active.sub === nav.subcat_id && nav.cat_id === active.cat && nav.dua_id === active.dua;

  return (
    <li>
      <Link
        href={`/${catName}?cat=${catId}&sub=${nav.subcat_id}&dua=${nav.dua_id}`}
        onClick={() => setActiveDua(nav.dua_id)}
        {...rest}
        className={cn("", { "text-primary": isActive }, className)}
      >
        {nav.dua_name_en}
      </Link>
    </li>
  );
}
