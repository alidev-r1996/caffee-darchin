"use client";

import { sidebarItem } from "@/constants/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryDashboard = () => {
  const pathname = usePathname();
  return (
    <div className="mt-4 grid gap-2 md:gap-4 grid-cols-3 p-4">
      {sidebarItem.map((item) => {
        const Icon: any = item.icon;
        return (
          <Link
            title={item.title}
            href={`${item.href}`}
            key={item.id}
            className={`${pathname == item.href ? "bg-blue-100 dark:bg-slate-800  text-blue-600 font-bold" : "hover:bg-slate-100 dark:hover:bg-slate-600"} border aspect-square md:aspect-auto md:h-44 justify-center items-center shadow flex flex-col md:flex-row  flex-1 gap-3 p-2 md:p-4 rounded`}
          >
            <Icon className="size-6 md:size-max" />
            <p className="md:text-lg text-sm">{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryDashboard;
