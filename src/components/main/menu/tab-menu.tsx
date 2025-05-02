"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Category } from "../../../../prisma/generated";


const TabMenu = ({ category }: { category: Category[] }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleClick = (title: string) => {
    params.set("category", title);
    const url = `${pathname}?${params.toString()}`;
    router.push(url, { scroll: false });
  };


  return (
    <div className="md:flex grid grid-cols-2 items-center justify-center gap-2 mb-6 p-2">
      {category.map((item) => {
        return (
          <div
            onClick={() => handleClick(item.englishTitle)}
            key={item.id}
            className={`${
              searchParams.get("category") === item.englishTitle
                ? "bg-teal-600 text-white font-bold"
                : "bg-slate-100 dark:bg-slate-800"
            } flex items-center gap-2 flex-1 md:flex-none justify-between cursor-pointer px-3 py-1  rounded `}
          >
            <div className="relative size-12">
                <Image src={item.img} alt="" fill className=""/>
            </div>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TabMenu;
