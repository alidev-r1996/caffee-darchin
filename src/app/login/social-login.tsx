import { LoginGithub, LoginGoogle } from "@/lib/actions/auth-action";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialLogin = () => {
    return ( 
        <div className="flex items-center gap-1 md:p-6 p-2 text-xs text-slate-500">
        <form
          action={LoginGoogle}
          id="google"
          className="p-2 w-1/2  border border-slate-200 rounded-lg hover:bg-slate-100 transition-all duration-300 cursor-pointer"
        >
          <button
            type="submit"
            className="flex gap-2 text-xs md:text-sm whitespace-nowrap items-center mx-auto [&>svg]:text-orange-600 [&>svg]:size-6"
          >
            <BsGoogle /> Signin With Google
          </button>
        </form>
        <form
          action={LoginGithub}
          id="github"
          className="p-2 w-1/2  border border-slate-200 rounded-lg hover:bg-slate-100 transition-all duration-300 cursor-pointer "
        >
          <button
            type="submit"
            className="flex gap-2 text-xs md:text-sm whitespace-nowrap items-center mx-auto [&>svg]:text-slate-600 [&>svg]:size-6"
          >
            <BsGithub /> Signin With GitHub
          </button>
        </form>
      </div>
     );
}
 
export default SocialLogin;