import HeroAnimated from "./hero-section.anime";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:flex-row bg-slate-50 dark:bg-slate-800 max-h-screen md:h-[80vh] p-4">
      <HeroAnimated />
    </div>
  );
};

export default HeroSection;
