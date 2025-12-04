"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils/utils";
import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
  label: string;
  name: string;
  value?: string | number;
  placeholder?: string;
  options: { label: string; value: string | number }[];
  onChange: (value: string | number) => void;
  className?: string;
}

export default function CustomSelect({
  label,
  name,
  value,
  placeholder,
  options,
  onChange,
  className
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // بستن روی کلیک بیرون
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className={cn("w-full relative", className)}>
      <p className="p-1 capitalize text-sm text-zinc-600 dark:text-zinc-400">
        {label}
      </p>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          `w-full flex justify-between items-center p-2 text-sm border border-slate-200 dark:border-slate-600
           rounded bg-white dark:bg-zinc-900 placeholder:text-xs 
           focus:outline-none focus:border-slate-400 dark:focus:border-slate-400`
        )}
      >
        <span className={value ? "text-black dark:text-white" : "text-zinc-400"}>
          {options.find((opt) => opt.value === value)?.label ||
            placeholder ||
            "انتخاب کنید..."}
        </span>
        <ChevronDown className="w-4 h-4 text-zinc-500" />
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 mt-1 bg-white dark:bg-zinc-800 border 
                     border-slate-200 dark:border-slate-600 rounded shadow-md max-h-60 overflow-auto z-20"
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={cn(
                "p-2 text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700",
                value === opt.value && "bg-slate-200 dark:bg-zinc-700 font-medium"
              )}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
