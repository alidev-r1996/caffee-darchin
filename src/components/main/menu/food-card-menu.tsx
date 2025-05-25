"use client";

import CardAvatar from "@/components/cardAvatar";
import { ConvertToPersianDigit } from "@/helper/persianDigits";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    scale: 0.8,
    x: i % 2 === 0 ? -80 : 80,
    skewY: i % 2 === 0 ? -5 : 5,
  }),
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    skewY: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      delay: i * 0.1,
    },
  }),
};

type FoodItem = {
  id: number | string;
  img: string;
  title: string;
  ingredients: string[];
  price: number | string;
};

type FoodCardMenuProps = {
  item: FoodItem;
  index: number;
};

const FoodCardMenu = ({ item, index }: FoodCardMenuProps) => {
  return (
    <motion.div
      key={item.id}
      custom={index}
      initial="hidden"
      whileInView="visible"
      variants={itemVariants}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 5px 20px rgba(255, 193, 7, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-dashed border-amber-200 dark:border-zinc-700 hover:shadow-md transition-shadow"
    >
      <div className="relative size-16 md:size-20">
        <CardAvatar
          src={item.img}
          className="size-16 md:size-20 object-fill rounded-full "
        />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <div className="flex items-center gap-1.5 text-sm md:text-base">
          <h2 className="font-bold text-amber-700 dark:text-amber-400">
            {item.title}
          </h2>
          <p className="flex-1 border-dotted border-b-2 border-b-zinc-400"></p>
          <div className="flex items-center gap-0.5 text-rose-600 dark:text-amber-500 font-semibold">
            <strong>{ConvertToPersianDigit(item.price)}</strong>
            <p className="text-xs">تومان</p>
          </div>
        </div>
        <p className="text-zinc-500 text-xs md:text-sm dark:text-zinc-400">
          {item.ingredients.join("، ")}
        </p>
      </div>
    </motion.div>
  );
};

export default FoodCardMenu;
