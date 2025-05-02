"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UserRound } from 'lucide-react';
import { ModeToggle } from "@/components/dark-toggle";

const navbarItems = [
  { id: 1, title: "صفحه اصلی", href: "#/" },
  { id: 2, title: "درباره ما", href: "#about" },
  { id: 3, title: "منوی اصلی", href: "#menu" },
];

const NavBarDesktop = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav className={`${scroll ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow border-b" : "bg-slate-50 dark:bg-slate-800/95"} md:flex itesms-center justify-between p-4 hidden`}>
        <ul className="flex items-center gap-4">
          {navbarItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <h1 className="font-black text-shadow text-2xl">کافه دارچیــــــن</h1>
        <ul className="flex items-center gap-2">
          <li className="bg-slate-100 border dark:bg-slate-700/90 p-[5px] rounded hover:shadow transition-all duration-300 hover:scale-105 active:scale-95">
            <Link href="/login" ><UserRound /></Link>
          </li>
          <li>
            <ModeToggle />
          </li>
          <li>
            <Button className="hover:shadow-blue-500"><Link href='#reserve'>رزرو میز</Link> </Button>
          </li>
        </ul>
      </nav>
  );
};

export default NavBarDesktop;
