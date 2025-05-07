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

  useEffect(()=>{
    if(!searchParams.get("category")){
      params.set("category", "pizza");
      const url = `${pathname}?${params.toString()}`;
      router.push(url, { scroll: false });
    }
  },[])

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
        viewport={{ once: true, amount: "all" }}
        className="md:flex grid grid-cols-2 items-center justify-center gap-2 mb-6 p-2 max-w-full md:overflow-x-auto"
      >
        {category.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            onClick={() => handleClick(item.englishTitle)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`${
              searchParams.get("category") === item.englishTitle
                ? "bg-teal-600 text-white font-bold"
                : "bg-slate-100 dark:bg-slate-800"
            } flex items-center gap-2 flex-1 md:flex-none justify-between cursor-pointer px-3 py-1 rounded`}
          >
            <CardAvatar src={item.img} className="size-12" />
            <p>{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default memo(TabMenu);
