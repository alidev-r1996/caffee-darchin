"use client"

import InputText from "@/components/ui/inputText"
import { SIGNIN_FORM } from "@/constants/constant";
import Link from "next/link";
import SocialLogin from "./social-login";
import { FormEvent, useRef } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const SignIn = () => {
  const formRef = useRef<HTMLFormElement>(null);
const router = useRouter();

  const creadentialLogin = async (event: FormEvent) => {
    event.preventDefault();
    if (formRef.current == null) return;
  
    const formData = new FormData(formRef.current);
    const { email, password } = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
  
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // جلوگیری از ری‌دایرکت
    });
  
    if (res.error) {
      toast.error("نام کاربری یا رمز عبور اشتباه است!");
    } else {
      // login successful: redirect manually
      router.refresh();
      router.push("/");
    }
  };
  

  return (
    <div className="border rounded-lg shadow flex mx-auto flex-col gap-4 w-full md:w-[496px] p-4 md:mt-12 bg-white dark:bg-slate-900">
      <h1 className="font-bold text-lg md:text-2xl mt-4 text-center">به <strong className="text-amber-600">کافه دارچین</strong> خوش آمدید!</h1>

      <SocialLogin />

      <div className="flex items-center px-8 md:mt-4 md:-mb-3">
        <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
        <p className="text-sm text-slate-500 px-4">یا</p>
        <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
      </div>

      <form onSubmit={creadentialLogin} ref={formRef}
        id="creadentials"
        className="flex flex-col gap-4 text-sm p-6"
      >
        {SIGNIN_FORM.map((input) => (
          <InputText key={input.id} {...input} />
        ))}
        <button
          type="submit"
          className="w-full bg-slate-800 text-white p-2 font-bold rounded-lg mt-5 transition-all duration-300 cursor-pointer hover:shadow-[0_0_6px_rgba(0,0,0,0.5)]"
        >
          ورود
        </button>
      </form>
      {/* <Link href="/login/recover" className="text-center text-sm">
        رمز عبور خود را فراموش کرده‌اید؟
        <span className="text-slate-800 px-2 cursor-pointer font-bold hover:text-blue-500  transition-all duration-200">
          بازیابی
        </span>
      </Link> */}
    </div>
  );
};

export default SignIn;
