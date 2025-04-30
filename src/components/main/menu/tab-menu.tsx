"use client";

import {
  Wine,
  Pizza,
  Coffee,
  UtensilsCrossed,
  CakeSlice,
  IceCreamCone,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const tabItem = [
  { id: 1, img: "pizza.png", title: "پیتزا", englishTitle: "pizza" },
  { id: 2, img: "caffee.png", title: "کافه", englishTitle: "coffee" },
  { id: 3, img: "food.png", title: "غذا", englishTitle: "food" },
  { id: 4, img: "desert.png", title: "دسر", englishTitle: "desert" },
  { id: 5, img: "drink.png", title: "نوشیدنی", englishTitle: "drink" },
  { id: 6, img: "ice.png", title: "بستنی", englishTitle: "ice-cream" },
];

const TabMenu = () => {
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
      {tabItem.map((item) => {
        return (
          <div
            onClick={() => handleClick(item.englishTitle)}
            key={item.id}
            className={`${
              searchParams.get("category") === item.englishTitle
                ? "bg-teal-600 text-white font-bold"
                : "bg-slate-100"
            } flex items-center gap-2 flex-1 md:flex-none justify-between cursor-pointer px-3 py-1  rounded `}
          >
            <div className="relative size-12">
                <Image src={`/images/category/${item.img}`} alt="" fill className=""/>
            </div>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TabMenu;
