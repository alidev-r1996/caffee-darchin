"use client";

import CardAvatar from "@/components/cardAvatar";
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { memo, useEffect } from "react";

const headingVariant = {
  hidden: { y: 100, opacity: 0.2 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};

const TabMenu = ({ category }: { category: any[] }) => {
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
    <div className="mt-10">
      <motion.h1
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-black text-2xl text-center my-5 "
      >
        منوی اصلی
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        className="md:flex grid grid-cols-2 items-center justify-center gap-4 mb-6 p-2 max-w-full md:overflow-y-hidden md:overflow-x-auto"
      >
        {category.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            onClick={() => handleClick(item.englishTitle)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`${
              searchParams.get("category") === item.englishTitle
                ? "ring-rose-600 ring-3 ring-offset-2 rounded"
                : "bg-slate-100 dark:bg-slate-800 blur-[0.80px]"
            } flex items-center gap-6 flex-1 md:flex-none justify-between cursor-pointer rounded-lg relative w-full h-32 md:size-44 group overflow-hidden`}
          >
            <CardAvatar src={item.img} className="size-full group-hover:scale-105 transition-all duration-200" />
            <p className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-slate-900 to-transparent rounded "></p>
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 mx-auto text-white">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default memo(TabMenu);
