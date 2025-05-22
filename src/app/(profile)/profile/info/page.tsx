import { getUserInfo } from "@/lib/actions/user-action";
import ProfileInfo from "./_components/profileInfo";

const Page = async () => {
  
  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden p-4 md:pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-sm md:text-2xl font-bold"> مشخصات کاربری </h1>
      </div>
      <ProfileInfo />
    </div>
  );
};

export default Page;
