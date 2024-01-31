import { Category } from "$types";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import slugify from "slugify";
import { joinUrl } from "./util/joinUrl";

async function getFirstCategory() {
  const res = await fetch(joinUrl(process.env.NEXT_PUBLIC_API_URL, "dua", "first-category"), { method: "GET" });
  return (await res.json()) as Category;
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (/^\/[^/]+$/.test(path) || path === "/") {
    if (path === "/") {
      const category = await getFirstCategory();
      return NextResponse.redirect(
        new URL(`/${slugify(category.cat_name_en, { lower: true })}?cat=${category.cat_id}`, request.url)
      );
    }

    const cat = parseInt(request.nextUrl.searchParams.get("cat") ?? "", 10);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(cat)) {
      const category = await getFirstCategory();
      return NextResponse.redirect(
        new URL(`/${slugify(category.cat_name_en, { lower: true })}?cat=${category.cat_id}`, request.url)
      );
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon).*)"],
};
