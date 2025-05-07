import InputText from "@/components/ui/inputText"
import { SIGNIN_FORM } from "@/constants/constant";
import {LoginCredentials} from "@/lib/actions/auth-action"
import Link from "next/link";
import SocialLogin from "./social-login";



const SignIn = async () => {

  return (
    <div className="border rounded-lg shadow flex mx-auto flex-col gap-4 w-full md:w-[496px] p-4 md:mt-12 mt-8">
      <h1 className="font-bold text-lg md:text-2xl mt-4 text-center">به <strong className="text-amber-600">کافه دارچین</strong> خوش آمدید!</h1>

      <SocialLogin />

      <div className="flex items-center px-8 md:mt-4 md:-mb-3">
        <div className="w-full h-[1px] bg-slate-200"></div>
        <p className="text-sm text-slate-500 px-4">یا</p>
        <div className="w-full h-[1px] bg-slate-200"></div>
      </div>

      <form
        action={LoginCredentials}
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
      <Link href="/login/recover" className="text-center text-sm">
        رمز عبور خود را فراموش کرده‌اید؟
        <span className="text-slate-800 px-2 cursor-pointer font-bold hover:text-blue-500  transition-all duration-200">
          بازیابی
        </span>
      </Link>
    </div>
  );
};

export default SignIn;
