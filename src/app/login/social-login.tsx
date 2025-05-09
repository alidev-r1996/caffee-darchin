import { LoginGithub, LoginGoogle } from "@/lib/actions/auth-action";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialLogin = () => {
    return ( 
        <div className="flex items-center gap-1 md:p-6 p-2 text-xs text-slate-500">
        <form
          action={LoginGoogle}
          id="google"
          className="p-2 w-1/2  border border-slate-200 dark:border-slate-600 dark:hover:bg-slate-600 rounded-lg hover:bg-slate-100 transition-all duration-300 cursor-pointer"
        >
          <button
            type="submit"
            className="flex gap-2 text-xs md:text-sm cursor-pointer whitespace-nowrap items-center mx-auto [&>svg]:text-orange-600 [&>svg]:size-6"
          >
            <BsGoogle /> ورود با گوگل
          </button>
        </form>
        <form
          action={LoginGithub}
          id="github"
          className="p-2 w-1/2  border border-slate-200 dark:border-slate-600 dark:hover:bg-slate-600 rounded-lg hover:bg-slate-100 transition-all duration-300 cursor-pointer "
        >
          <button
            type="submit"
            className="flex gap-2 text-xs md:text-sm cursor-pointer whitespace-nowrap items-center mx-auto [&>svg]:text-slate-600 [&>svg]:dark:text-slate-300 [&>svg]:size-6"
          >
            <BsGithub /> ورود با گیت‌هاب
          </button>
        </form>
      </div>
     );
}
 
export default SocialLogin;