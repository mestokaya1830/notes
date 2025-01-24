"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = usePathname()
  return (
    <>
      <nav className="navbar">
        <Link href="/" className={router === '/' ? "active" : "links"} >Home</Link>
        <Link href="/about" className={router === '/about' ? "active" : "links"} >About</Link>
        <Link href="/contact" className={router === '/contact' ? "active" : "links"} >Contact</Link>
        <Link href="/admin/users" className={router === '/admin/users' ? "active" : "links"} >Users</Link>
        <Link href="/admin/adduser" className={router === '/admin/adduser' ? "active" : "links"} >Add User</Link>
      </nav>
    </>
  );
}
