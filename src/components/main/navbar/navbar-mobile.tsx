"use client";

import { useEffect, useState } from "react";
import { AlignLeft, UserRound } from "lucide-react";
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

const navbarItems = [
    { id: 1, title: "صفحه اصلی", href: "#/" },
    { id: 2, title: "درباره ما", href: "#about" },
    { id: 3, title: "منوی اصلی", href: "#menu" },
  ];

const NavBarMobile = () => {
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
          : "bg-slate-50"
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
              <li onClick={() => setShow(false)} key={item.id} className="p-2 rounded hover:border-r-4 hover:border-r-black hover:bg-slate-100 transition-all duration-300 px-3 hover:shadow">
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <SheetFooter>
            <Button className="hover:shadow-blue-500">رزرو میز</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <ul className="flex items-center gap-1">
        <li className="bg-white border p-[6px] rounded transition-all duration-300 hover:bg-slate-100">
          <Link href="/login">
            <UserRound />
          </Link>
        </li>
        <li>
        <Button className="hover:shadow-blue-500"><Link href='#reserve'>رزرو میز</Link> </Button>

        </li>
      </ul>
    </nav>
  );
};

export default NavBarMobile;
