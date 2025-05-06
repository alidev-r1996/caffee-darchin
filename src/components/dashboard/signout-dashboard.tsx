
import { LogoutUser } from "@/lib/actions/auth-action";
import { Power  } from "lucide-react";

const SignoutDashboard = () => {
  return (
    <form title="خروج" action={LogoutUser} className="border-x self-end md:self-auto border-y justify-center md:justify-normal md:border-x-0 md:border-dashed hover:bg-rose-100 hover:text-rose-600 dark:hover:bg-rose-600 dark:hover:text-slate-100 cursor-pointer  md:border-b  flex items-center flex-1 gap-3 p-2 md:p-4 rounded">
      <button type="submit" className="flex gap-2 items-center cursor-pointer">
      <Power  className="size-6 md:size-[75%]" />
      <span className="hidden md:block">خروج </span>
      </button>
    </form>
  );
};

export default SignoutDashboard;
