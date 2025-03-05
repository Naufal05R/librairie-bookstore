import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const theme = req.cookies.get("theme")?.value || "system";

  const response = NextResponse.next();
  response.headers.set("X-Theme", theme);
  return response;
}
