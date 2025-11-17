"use client";

import PersonelCard from "./personel-card";
import { motion } from "framer-motion";

const personel = [
  { id: 1, name: "علیرضا مولایی", role: "مدیریت", img: "4.jpg" },
  { id: 2, name: "محمدرضا پاینبرد", role: "مدیریت", img: "3.jpg" },
  { id: 3, name: "سارا تهرانی", role: "سرآشپز", img: "2.jpg" },
  { id: 4, name: "مونا شیرازی", role: "سرپرست سالن", img: "1.jpg" },
];

const headingVarints = {
  hidden: { opacity: 0, scale: 0.2, x: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};


const Personel = () => {
  return (
    <div className="flex flex-col gap-4 my-4 w-full p-4 ">
      <motion.h1
        variants={headingVarints}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-black text-2xl text-center my-5 flex items-center justify-center gap-2"
      >
        خانواده <p className="text-amber-400">دارچیـــن</p> 
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        className="flex flex-col md:flex-row items-center gap-4 cursor-pointer"
      >
        {personel.map((item) => {
          return <PersonelCard key={item.id} {...item} />;
        })}
      </motion.div>
    </div>
  );
};

export default Personel;
