import { cn } from "@/lib/utils/utils";
import { RefObject, memo } from "react";

type InputTextProps = {
  id?: number | string;
  name: string;
  placeholder: string;
  label: string;
  value?: string;
  type?: "text" | "email" | "password" | "number";
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText: React.FC<InputTextProps> = ({
  name,
  placeholder,
  label,
  value,
  onChange,
  type = "text",
  className,
}) => {
  return (
    <label htmlFor="name" className={cn("w-full", className)}>
      <p className="p-1  capitalize text-sm text-zinc-600 dark:text-zinc-400">
        {label}
      </p>
      <input
        type={type}
        name={name}
        required
        minLength={name == "phone" ? 11 : name == "persons" || "rating" ? 1 : 3}
        id={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="w-full placeholder:text-xs p-2 text-sm border border-slate-200 dark:border-slate-600 rounded peer focus:outline-none focus:border-slate-400 dark:focus:border-slate-400"
      />
    </label>
  );
};

export default memo(InputText);
