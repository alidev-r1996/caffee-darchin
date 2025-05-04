
import { LogoutUser } from "@/lib/actions/auth-action";
import { Power  } from "lucide-react";

const SignoutButton = () => {
  return (
    <form action={LogoutUser} className="flex items-center gap-2 text-sm p-[7px] cursor-pointer hover:!text-rose-500  hover:bg-accent rounded-r hover:font-bold transition-colors duration-300">
      <button type="submit" className="flex gap-2 items-center cursor-pointer">
      <span>خروج </span>
      <Power  className="size-4 hover:text-rose-500" />
      </button>
    </form>
  );
};

export default SignoutButton;
