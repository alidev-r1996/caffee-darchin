"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UserRoundPlus   } from "lucide-react";
import { ModeToggle } from "@/components/dark-toggle";
import { motion } from "framer-motion";
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

const NavBarDesktop = ({
  role,
}: {
  role: "ADMIN" | "USER" | null | undefined;
}) => {
  const [scroll, setScroll] = useState(false);

  console.log(role);
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
      className={`${scroll ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow border-b" : "bg-slate-50 dark:bg-slate-800/95"} md:flex itesms-center justify-between p-4 hidden`}
    >
      <motion.ul
        variants={navContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        {navbarItems.map((item) => (
          <motion.li variants={navChildVariant} key={item.id}>
            <Link href={item.href}>{item.title}</Link>
          </motion.li>
        ))}
      </motion.ul>
      <motion.h1
        initial={{ scale: 0, opacity: 0, rotateX: 0 }}
        whileInView={{ scale: 1, opacity: 1, rotateX: 1080 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="font-black text-shadow text-2xl"
      >
        کافه دارچیــــــن
      </motion.h1>
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
          className="bg-slate-100 border dark:bg-slate-700/90 rounded hover:shadow transition-all duration-300 hover:scale-105 active:scale-95"
        >
         {!role ?  <Link href="/login" className="flex items-center p-[5px]">
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

export default NavBarDesktop;
