"use client";

import { ConvertToPersianDigit } from "@/helper/persianDigits";
import { AvatarDemo } from "@/components/AvatarUi";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = (i: number) => ({
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: i % 2 === 0 ? -80 : 80,
    skewY: i % 2 === 0 ? -5 : 5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    skewY: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
});

const MenuContent = ({ foods }: { foods: any[] }) => {
  if (!foods) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="grid grid-col-1 md:grid-cols-2 gap-4 p-4 gap-x-8"
    >
      {foods.map((item, index) => (
        <motion.div
          key={item.id}
          custom={index}
          variants={itemVariants(index)}
          viewport={{once: true, amount: "all"}}
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 5px 20px rgba(255, 193, 7, 0.2)",
          }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-slate-800 border border-dashed border-amber-200 dark:border-zinc-700 hover:shadow-md transition-shadow"
        >
          <div className="relative size-16 md:size-20">
            <AvatarDemo
              src={item.img}
              className="size-16 md:size-20 object-fill rounded-full border border-amber-500 shadow-sm"
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
              {(item?.ingredients as string[]).join("، ")}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MenuContent;
