import { ModeToggle } from "@/components/dark-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";

const DashboardHeader = () => {
  return (
    <div className="md:col-span-9 md:row-span-1 col-span-12 bg-accent border shadow flex items-center justify-between p-4">
      <div className="flex items-center gap-1">
        <Avatar className="size-10">
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback><p className="p-1 rounded-full bg-primary text-white"><UserIcon/></p></AvatarFallback>
        </Avatar>
        <p>علیرضا مولایی</p>
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
