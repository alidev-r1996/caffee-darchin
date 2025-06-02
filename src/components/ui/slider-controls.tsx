import {ChevronRight } from "lucide-react";

export const PrevButton = ({ onClick }: { onClick: () => void }) => (
    <button
      onClick={onClick}
      className="rounded-full bg-gray-100 cursor-pointer dark:bg-gray-800 p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition shadow"
      aria-label="Previous Slide"
    >
      <ChevronRight className="text-slate-500 dark:hover:text-slate-200 size-4 md:size-5"/>
    </button>
  );
  
  export const NextButton = ({ onClick }: { onClick: () => void }) => (
    <button
      onClick={onClick}
      className="rounded-full bg-gray-200 cursor-pointer dark:bg-gray-800 p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition shadow"
      aria-label="Next Slide"
    >
      <ChevronRight className="rotate-180 text-slate-500 dark:hover:text-slate-200 size-4 md:size-5" />
    </button>
  );
  
  export const DotButton = ({
    selected,
    onClick,
  }: {
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      className={`size-2 rounded-full transition cursor-pointer ${
        selected ? "bg-slate-400 dark:bg-slate-500 size-3 -translate-y-1" : "bg-slate-200 dark:bg-slate-700"
      }`}
      onClick={onClick}
      aria-label="Scroll to slide"
    />
  );
  