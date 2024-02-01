"use client";

import Dua from "$assets/icons/dua.svg";
import { cn } from "$shadcn/utils";
import { Navigation } from "$types";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { useCategory } from "./categories.context";

interface DuaNameProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  nav: Navigation["sub_categories"][0]["duas"][0];
  catName: string;
}

export function DuaName({ className, nav, catName, ...rest }: DuaNameProps) {
  const { setActiveDua, active } = useCategory();
  const isActive = active.sub === nav.subcat_id && nav.cat_id === active.cat && nav.dua_id === active.dua;

  return nav.dua_name_en ? (
    <li>
      <Link
        href={`/${catName}?cat=${nav.cat_id}&sub=${nav.subcat_id}&dua=${nav.dua_id}`}
        className={cn("flex gap-4 pr-2", { "text-primary": isActive }, className)}
        onClick={() => {
          setActiveDua(nav.dua_id);
          setTimeout(() => {
            const element = document.getElementById(slugify(nav.dua_name_en, { lower: true }));
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }}
        {...rest}
      >
        <Image src={Dua} alt="arrow" className="-mt-2" />
        {nav.dua_name_en}
      </Link>
    </li>
  ) : null;
}
