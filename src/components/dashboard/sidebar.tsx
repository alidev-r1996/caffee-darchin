"use client"
import { sidebarItem } from "@/constants/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignoutButton from "../main/navbar/signout-button";
import SignoutDashboard from "./signout-dashboard";



const SideBar = () => {
    const pathname = usePathname();
  return (
    <div className="col-span-12 md:col-span-3 row-span-1 md:row-start-1 md:row-span-2 bg-slate-50 dark:bg-slate-800 p-2 md:p-4">
      <h1 className="text-center p-4 text-xl hidden md:block font-bold">کافه دارچین</h1>
      <div className="flex flex-row md:flex-col gap-1 md:gap-0 md:mt-4">
        {sidebarItem.map((item) => {
          const Icon: any = item.icon;
          return (
            <Link
              title={item.title}
              href={`${item.href}`}
              key={item.id}
              className={`${pathname == item.href ? "bg-blue-100 dark:bg-slate-900  text-blue-600 font-bold": "hover:bg-slate-100 dark:hover:bg-slate-600"} border-x md:border-x-0 md:border-dashed   md:border-b  flex items-center flex-1 gap-3 p-2 md:p-4 rounded`}
            >
              <Icon className="size-full md:size-max"/>
              <p className="hidden md:block">{item.title}</p>
            </Link>
          );
        })}
        <SignoutDashboard />
      </div>
    </div>
  );
};

export default SideBar;
