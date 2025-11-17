"use client";

import { motion } from "framer-motion";
import { Users, EarOff, BookCheck, BookOpenText } from "lucide-react";
import Image from "next/image";

const wordByWord = (text: string) =>
  text.split(" ").map((word, i) => (
    <motion.span key={i} variants={wordVariants} className="inline-block px-[2px]">
      {word}
    </motion.span>
  ));

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1 + i * 0.2,
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative w-full h-full md:h-[44vh]">
      {/* Background */}
      <div className="absolute inset-0 h-full blur-[1px] brightness-55">
        <Image
          src="/images/about.jpg"
          alt="about"
          fill
          sizes="100vw"
          className="object-fill"
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        className="relative z-10 flex flex-col gap-8 p-4 md:flex-row items-center justify-center h-full"
      >
        {/* Text Section */}
        <motion.div className="flex flex-col gap-4">
          <motion.h1
            variants={containerVariants}
            className="text-white text-4xl font-bold md:p-4 text-center md:text-start leading-14 flex flex-wrap"
          >
            {wordByWord("به کافه رستوران")}
            <motion.strong
              variants={wordVariants}
              className="font-black text-amber-500 px-3 inline-block"
            >
              دارچین
            </motion.strong>
            {wordByWord("خوش آمدید!")}
          </motion.h1>

          <motion.p
            variants={containerVariants}
            className="md:w-2/3 w-full text-zinc-300 md:p-4 leading-6 text-sm md:text-base flex flex-wrap"
          >
            {wordByWord(
              "مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که خدمت‌گزار همشهریان عزیز هستیم. ما در دارچین همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم."
            )}
          </motion.p>
        </motion.div>

        {/* Icons */}
        <div className="grid grid-cols-4 md:w-1/2 w-full gap-8 text-sm md:text-base">
          {[
            { Icon: Users, label: "پرسنل مجرب و حرفه‌ای" },
            { Icon: EarOff, label: "محیطی دلنشین و آرام" },
            { Icon: BookCheck, label: "کیفیت بالای غذاها" },
            { Icon: BookOpenText, label: "منوی متنوع" },
          ].map(({ Icon, label }, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-1 text-zinc-300 col-span-2"
              custom={i}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
            >
              <Icon className="size-6 text-amber-600" />
              <p>{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
