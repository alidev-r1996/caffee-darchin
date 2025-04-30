"use client";

import { Users, EarOff, BookCheck, BookOpenText } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div id="about" className="relative w-full h-full md:h-[40vh]">
      {/* Background image */}
      {/* <div className="absolute inset-0 h-full bg-[url('/images/about.jpg')] bg-no-repeat bg-cover bg-center bg-fixed blur-[1px]  brightness-45"></div> */}

      {/* Overlay text */}
      <div className="relative z-10 flex flex-col gap-8 p-4 md:flex-row items-center justify-center h-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-4xl font-bold md:p-4 text-center md:text-start leading-14">
            به کافه رستوران
            <strong className="font-black text-amber-500">دارچین</strong> خوش
            آمدید!
          </h1>
          <p className="md:w-2/3 w-full text-zinc-300 md:p-4 leading-6 text-sm md:text-base">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که خدمت‌گزار همشهریان عزیز هستیم. ما در دارچین همواره تلاش
            کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی
            دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
          </p>
        </div>

        <div className="grid grid-cols-4 md:w-1/2 w-full gap-8 text-sm md:text-base">
          <div className="flex flex-col items-center text-zinc-300  gap-1 col-span-2">
            <Users className="size-6 text-amber-600" />
            <p>پرسنل مجرب و حرفه‌ای</p>
          </div>
          <div className="flex flex-col items-center  text-zinc-300 gap-1 col-span-2">
            <EarOff className="size-6 text-amber-600" />
            <p>محیطی دلنشین و آرام</p>
          </div>
          <div className="flex flex-col items-center gap-1 text-zinc-300 col-span-2">
            <BookCheck className="size-6 text-amber-600" />
            <p>کیفیت بالای غذاها</p>
          </div>
          <div className="flex flex-col items-center gap-1  text-zinc-300 col-span-2">
            <BookOpenText className="size-6 text-amber-600" />
            <p>منوی متنوع </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
