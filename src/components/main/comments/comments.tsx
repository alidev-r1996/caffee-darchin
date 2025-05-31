"use client"

import { motion } from "framer-motion";
import CommentCard from "./card";
import { EmblaCarousel } from "@/components/ui/slider";

const commentItems = [
  {
    id: 1,
    rating: 4,
    author: "نرگس افضلی",
    text: "فضای دارچین خیلی گرم و صمیمیه، از اونجاس که یه بار میری مشتری دائمی میشی. من عاشق لاته‌شونم، هر بار یه حس خوب برام داره.",
    img: "narges.png",
  },
  {
    id: 2,
    rating: 5,
    author: "سارا محمدی",
    text: "من عاشق کافه‌گردیم، ولی دارچین واقعاً یه چیز دیگه‌ست! پرسنل هم خیلی خوش‌برخوردن.",
    img: "sara.png",
  },
  {
    id: 3,
    rating: 5,
    author: "حمید فرزانه",
    text: "برای تولد دخترم یه میز توی فضای باز دارچین رزرو کردم، همه چی عالی بود. هم غذاها خوشمزه بودن هم موزیک ملایم خیلی فضا رو خاص کرده بود.",
    img: "hamid.png",
  },
  {
    id: 4,
    rating: 4,
    author: "علی رضایی",
    text: "یه بار با بچه‌ها رفتیم دارچین بعد از یه روز کاری شلوغ، انقدر اون نوشیدنی انار با دارچینش بهم چسبید که هنوز مزه‌ش یادمه!",
    img: "alireza.png",
  },
  {
    id: 5,
    rating: 5,
    author: "محمد طاهری",
    text: "ما تقریبا هر هفته یه وعده رو دارچین میریم. غذاهاش هم باکیفیتن هم قیمتاش منصفانه‌ست. مخصوصاً پاستای مرغش واقعاً حرف نداره.",
    img: "mohamad.png",
  },
  {
    id: 6,
    rating: 4,
    author: "سینا کاظمی",
    text: "دارچین یه جاییه که وقتی میری انگار یه مدت از شلوغیای شهر جدا میشی. یه گوشه دنج با یه لیوان چای ترش بخوری، تموم خستگی میره.",
    img: "sina.png",
  },
  {
    id: 7,
    rating: 5,
    author: "الهام کاظمی",
    text: "همه چی توی دارچین خوبه، از دکور گرفته تا اخلاق پرسنل. آخرین بار با دوستم رفتیم، تا سه ساعت نشستیم کسی حتی یه نگاه بد هم نکرد!",
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
    <div id="about" className="mt-10 space-y-8 overflow-hidden py-4 max-w-full">
      <div className="flex flex-col items-center justify-center gap-3 p-4 md:p-0">
        <motion.h1 viewport={{once:true}} variants={fadeUp} initial='hidden' whileInView='visible' custom={1} className="md:text-2xl text-xl  font-bold ">
        مشتریا چی می‌گن؟        
        </motion.h1>
        <motion.h2 viewport={{once:true}} variants={fadeUp} initial='hidden' whileInView='visible' custom={2} className="md:text-base text-sm text-center text-zinc-400">
        قهوه‌ و غذا بهونه‌ست، اینجا آدما حال دلشونو با ما شریک شدن.
        </motion.h2>
      </div>
      <div className=" w-full">
        <div
          className="flex h-full flex-col items-center justify-center my-8"
        >

          <EmblaCarousel>
          {commentItems.map((i) => {
              return <CommentCard key={i.id} {...i} />;
            })}
          </EmblaCarousel>
          
         
        </div>
      </div>
    </div>
  );
};

export default Comments;
