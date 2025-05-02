import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:flex-row bg-slate-50 dark:bg-slate-800 max-h-screen md:h-[60vh] p-4">
      <div className="flex flex-col md:gap-12 gap-8 w-full md:w-2/4 justify-center items-center p-4 mb-8 md:mb-0">
        <h1 className="font-black text-center p-1 text-3xl md:text-7xl">کـــــــــافه دارچـــــــــــین</h1>
        <p className="zinc-400 px-8 text-center text-sm md:text-base">فضایی مدرن، صمیمی و جذاب برای یک خاطره فراموش نشدنی</p>
      </div>
      <div className="relative w-full md:w-1/3 aspect-[16/11] md:aspect-[16/8] flex-1">
        <Image
          src={"/images/hero1.png"}
          alt="hero"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
