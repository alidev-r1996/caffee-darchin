"use client";

import { memo, useEffect, useState } from "react";
import { AlignLeft, UserRound, UserRoundPlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/dark-toggle";
import SignoutButton from "./signout-button";

const navbarItems = [
  { id: 1, title: "صفحه اصلی", href: "#/" },
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

const NavBarMobile = ({role}: {role: "ADMIN" | "USER" | null | undefined}) => {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  const pathname = usePathname();

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
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow border-b"
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
              کافه دارچین
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
          </ul>
          <SheetFooter>
            <Button className="hover:shadow-blue-500">رزرو میز</Button>
          </SheetFooter>
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
        <motion.li
          variants={navChildVariant}
          className="bg-slate-100 border dark:bg-slate-700/90  rounded hover:shadow transition-all duration-300 hover:scale-105 active:scale-95"
        >
           {!role ?  <Link href="/login" aria-label="login" className="flex items-center p-[5px]">
            <UserRoundPlus   />
          </Link>: <SignoutButton />}
        </motion.li>
        
        <motion.li variants={navChildVariant}>
          <Button className="hover:shadow-blue-500">
            {role == "ADMIN" ? (
              <Link href={"/dashboard"}>
                <p>داشبورد مدیریت</p>
              </Link>
            ) : (
              <Link href="#reserve">رزرو میز</Link>
            )}
          </Button>
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default memo(NavBarMobile);
