import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Improvement - fetch first category
  return NextResponse.redirect(new URL("/dua's-importance?cat=1", request.url));
}

export const config = {
  matcher: "/",
};
