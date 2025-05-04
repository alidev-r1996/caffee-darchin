import { ModeToggle } from "@/components/dark-toggle";
import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/lib/actions/user-action";
import Link from "next/link";
import { AvatarDemo } from "../AvatarUi";

const DashboardHeader = async() => {
  const userInfo = await getUserInfo();
    
  if (!userInfo)return null;

  return (
    <div className="md:col-span-9 md:row-span-1 col-span-12 dark:bg-stone-800/90 bg-stone-100 border shadow flex items-center justify-between p-4">
      <div className="flex items-center gap-1">
        <AvatarDemo src={userInfo?.img} className="size-14"/>
        <p>{userInfo.name?? userInfo.email.split("@")[0]}</p>
      </div>
      <div className="flex items-center gap-1">
        <div className="bg-slate-100 border dark:bg-slate-700/90 rounded hover:shadow transition-all duration-300 hover:scale-105 active:scale-95">
        </div>
        <ModeToggle />
        <Button>
            <Link href={'/'}>برو به کافه</Link>
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
