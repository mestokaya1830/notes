import { NextResponse } from "next/server"

export function middleware(req) {
  console.log(process.env.API)
  if(process.env.API !== "mesto"){
    return NextResponse.redirect(new URL('/', req.url))
  }
  
}

export const config = {
  matcher: ['/admin/:path*']
}