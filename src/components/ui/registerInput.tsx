import { FormState, UseFormRegister } from "react-hook-form";

type RegisterInputProps = {
  name: any;
  register: UseFormRegister<{
    name: string;
    date: Date;
    time: Date;
    phone: string;
    persons: string;
  }>;
  formState: FormState<{
    name: string;
    date: Date;
    time: Date;
    phone: string;
    persons: string;
  }>;
  placeholder: string;
  label: string;
  required?: boolean;
  type: string;
  className?: string;
};

const RegisterInput = ({
  formState,
  label,
  name,
  placeholder,
  register,
  required,
  className,
  type = "string",
}: RegisterInputProps) => {
  return (
    <label className={`${className} flex flex-col gap-1 w-full`}>
      <div className="flex items-center">
        <p className="p-1  capitalize text-sm text-zinc-600 dark:text-zinc-400">
          {label}
        </p>
        {required && <p className="text-rose-500 font-bold">*</p>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full placeholder:text-xs p-2 text-sm border border-slate-200 dark:border-slate-600 rounded peer focus:outline-none focus:border-slate-400 dark:focus:border-slate-400"
      />
      {formState.errors && formState.errors[name] && (
        <p className="text-rose-500 pl-2 text-[10px]">
          {formState.errors[name]?.message}
        </p>
      )}
    </label>
  );
};

export default RegisterInput;
