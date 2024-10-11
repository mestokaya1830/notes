import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

export default function middleware(request) {
  const auth = "mesto"
  if (!auth) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}


//admin route and under admin routes
//if you dont export config function middleware effect all route
export const config = {
  matcher: ['/admin', '/admin/(.*)']
}