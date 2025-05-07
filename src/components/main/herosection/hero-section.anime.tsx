"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const headingVarints = {
  hidden: { opacity: 0, scale: 0.2, x: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1.1,
      delay: 0.4,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.4, ease: "easeInOut" },
  },
};

export default function HeroAnimated() {
  return (
    <>
      <div className="flex flex-col md:gap-12 gap-8 w-full md:w-2/4 justify-center items-center p-4 mb-8 md:mb-0">
        <motion.h1
          variants={headingVarints}
          initial="hidden"
          animate="visible"
          className="font-black text-center p-1 text-3xl md:text-7xl text-amber-600 dark:text-amber-400"
        >
          کـــــــــافه دارچـــــــــــین
        </motion.h1>

        <motion.p
          variants={headingVarints}
          initial="hidden"
          animate="visible"
          className="text-zinc-400 text-center text-sm md:text-base"
        >
          فضایی مدرن، صمیمی و جذاب برای یک خاطره فراموش نشدنی
        </motion.p>
      </div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full md:w-1/3 aspect-[16/11] md:aspect-[16/8] flex-1"
      >
        <Image
          src={"/images/hero1.png"}
          alt="hero"
          fill
          sizes="100vw"
          className="object-contain"
        />
      </motion.div>
    </>
  );
}
