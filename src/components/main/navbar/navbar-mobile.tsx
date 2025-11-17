"use client";

import { memo, useEffect, useState } from "react";
import { AlignLeft, UserRoundPlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import ModeToggle from "@/components/dark-toggle";

const navbarItems = [
  { id: 1, title: "صفحه اصلی", href: "/" },
  { id: 2, title: "درباره ما", href: "#about" },
  { id: 3, title: "منوی اصلی", href: "#menu" },
];

const navContainerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const navChildVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const NavBarMobile = ({ role }: { role: "ADMIN" | "USER" | null | undefined }) => {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scroll
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow border-b z-50"
          : "bg-slate-50 dark:bg-slate-800/95"
      } flex itesms-center justify-between p-4 md:hidden`}
    >
      <Sheet open={show} onOpenChange={setShow}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <AlignLeft />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-center font-black">
                 کافه <span className="text-amber-500">دارچیــــــن</span>
               </SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-5 p-4">
            {navbarItems.map((item) => (
              <li
                onClick={() => setShow(false)}
                key={item.id}
                className="p-2 rounded hover:border-r-4 hover:border-r-black hover:bg-slate-100 dark:hover:bg-slate-900 dark:hover:text-slate-200 transition-all duration-300 px-3 hover:shadow"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
            <li
              onClick={() => setShow(false)}
              className="p-2 rounded hover:border-r-4 hover:border-r-black hover:bg-slate-100 dark:hover:bg-slate-900 dark:hover:text-slate-200 transition-all duration-300 px-3 hover:shadow"
            >
              <Link href="#reserve">رزرو میز</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
      <motion.ul
        variants={navChildVariant}
        initial="hidden"
        whileInView="visible"
        className="flex items-center gap-2"
      >
        <motion.li variants={navChildVariant}>
          <ModeToggle />
        </motion.li>
        {role != "ADMIN" && (
          <motion.li
            variants={navChildVariant}
            className="bg-slate-100 border dark:bg-slate-700/90  rounded hover:shadow transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {!role ? (
              <Link href="/login" aria-label="login" className="flex items-center p-[5px]">
                <UserRoundPlus />
              </Link>
            ) : (
              role == "USER" && (
                <div className="p-2 rounded text-sm hover:bg-slate-100 dark:hover:bg-slate-900 dark:hover:text-slate-200 transition-all duration-300 px-3 hover:shadow">
                  <Link href={"/profile"}>پروفایل</Link>
                </div>
              )
            )}
          </motion.li>
        )}

        <motion.li variants={navChildVariant}>
          {role == "ADMIN" && (
            <Button className="hover:shadow-blue-500">
              <Link href={"/dashboard"}>
                <p>داشبورد مدیریت</p>
              </Link>
            </Button>
          )}
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default memo(NavBarMobile);
