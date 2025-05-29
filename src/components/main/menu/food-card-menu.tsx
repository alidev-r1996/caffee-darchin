"use client";

import { motion } from "framer-motion";
import { ConvertToPersianDigit } from "@/helper/persianDigits";
import convertToPersianDigits from "@/lib/utils/PersianDigits";
import CardAvatar from "@/components/cardAvatar";

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

const itemVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? 50 : -50,
    scale: 0.9,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
      delay: i * 0.07,
    },
  }),
};

const FoodCardMenu = ({ item, index }: FoodCardMenuProps) => {
  const ingredientsText = convertToPersianDigits(item.ingredients.join("، "));

  return (
    <motion.div
      key={item.id}
      custom={index}
      initial="hidden"
      whileInView="visible"
      variants={itemVariants}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 8px 24px rgba(255, 193, 7, 0.2)",
      }}
      className="flex justify-between items-center w-full rounded-2xl p-2 bg-slate-200/30 dark:bg-zinc-700/30 backdrop-blur-md border border-dashed border-slate/30 dark:border-zinc-700 shadow-lg transition-all"
    >
      {/* عکس غذا */}

      <CardAvatar
          src={item.img}
          className="size-28 shrink-0 object-fill overflow-hidden rounded-xl ml-1 "
        />
      

      {/* متن‌ها */}
      <div className="flex flex-col justify-center gap-1 flex-1 pr-2">
        <h2 className="text-base font-bold text-zinc-800 dark:text-amber-300 line-clamp-1">
          {item.title}
        </h2>

        <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-1">
          {ingredientsText}
        </p>

        <div className=" font-semibold text-rose-600 dark:text-amber-200 mt-4">
          {ConvertToPersianDigit(item.price)}{" "}
          <span className="text-xs">تومان</span>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCardMenu;
