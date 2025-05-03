"use client"

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CommentCard from "./card";

const commentItems = [
  {
    id: 1,
    rating: 4,
    author: "نرگس افضلی",
    text: "دوره طراحی محصول برای استارتاپ‌ها بسیار کاربردی بود. بعد از این دوره توانستم محصول خود را به شکل بهتری مدیریت و به بازار عرضه کنم.",
    img: "narges.png",
  },
  {
    id: 2,
    rating: 4,
    author: "سارا محمدی",
    text: "با دوره‌های طراحی محصول توانستم محصول استارتاپ خود را به بازار عرضه کنم و نتایج فوق‌العاده‌ای بگیرم.",
    img: "sara.png",
  },
  {
    id: 3,
    rating: 5,
    author: "حمید فرزانه",
    text: "از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.",
    img: "hamid.png",
  },
  {
    id: 4,
    rating: 4,
    author: "علی رضایی",
    text: "دوره برنامه‌نویسی مدرسه مسیر به من کمک کرد که مهارت‌هایم را ارتقا بدهم و حالا به عنوان توسعه‌دهنده وب در یک استارتاپ مشغول به کار هستم.",
    img: "alireza.png",
  },
  {
    id: 5,
    rating: 5,
    author: "محمد طاهری",
    text: "مدرسه مسیر واقعا بهترین جایی است که تا به حال برای یادگیری برنامه‌نویسی پیدا کرده‌ام. مطالب به‌روز و منتورها همیشه حاضر به کمک هستند.",
    img: "mohamad.png",
  },
  {
    id: 6,
    rating: 4,
    author: "سینا کاظمی",
    text: "آموزش‌ها به‌گونه‌ای طراحی شده‌اند که حتی اگر مبتدی باشید، می‌توانید با راهنمایی‌های مرحله به مرحله و منتورینگ حرفه‌ای به سرعت پیشرفت کنید.",
    img: "sina.png",
  },
  {
    id: 7,
    rating: 4,
    author: "الهام کاظمی",
    text: "با گذراندن دوره بازاریابی دیجیتال مدرسه مسیر، توانستم شغل خودم را در این حوزه پیدا کنم. آموزش‌ها بسیار جامع و مفید بودند.",
    img: "elham.png",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};



const Comments = () => {

  return (
    <div id="about" className="mt-4 space-y-8 overflow-hidden py-4 max-w-full">
      <div className="flex flex-col items-center justify-center gap-3 p-4 md:p-0">
        <motion.h1 variants={fadeUp} initial='hidden' whileInView='visible' custom={1} className="md:text-2xl text-xl  font-bold ">
          نظرات هنرجویان ما!
        </motion.h1>
        <motion.h2 variants={fadeUp} initial='hidden' whileInView='visible' custom={2} className="md:text-base text-sm text-center text-zinc-400">
          نظرات برخی از هنرجویان موفق ما که با دوره‌های مدرسه مسیر به اهداف خود
          رسیده‌اند.
        </motion.h2>
      </div>
      <div className="h-[700px] w-full comment-bg">
        <div
          className="flex h-full flex-col items-center justify-center gap-36 pt-12 commentAnimation"
        >
          <div className="flex items-center gap-60">
            {commentItems.slice(0, 4).map((i) => {
              return <CommentCard key={i.id} {...i} />;
            })}
          </div>
          <div className="flex items-center gap-60">
            {commentItems.slice(4).map((i) => {
              return <CommentCard key={i.id} {...i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
