import { ModeToggle } from "@/components/dark-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/lib/actions/user-action";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { AvatarDemo } from "../AvatarUi";

const DashboardHeader = async() => {
  const userInfo = await getUserInfo();
    
  if (!userInfo)return null;

  return (
    <div className="md:col-span-9 md:row-span-1 col-span-12 bg-accent border shadow flex items-center justify-between p-4">
      <div className="flex items-center gap-1">
        <AvatarDemo src={userInfo?.img} className="size-14"/>
        <p>{userInfo.name?? userInfo.email.split("@")[0]}</p>
      </div>
      <div className="flex items-center gap-1">
        <ModeToggle />
        <Button>
            <Link href={'/'}>برو به کافه</Link>
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
