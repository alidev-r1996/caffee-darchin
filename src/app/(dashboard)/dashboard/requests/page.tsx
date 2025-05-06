import { DashboardPagePropsType } from "../categories/_types/category.type";
import RequestTable from "./_components/request-table";

const Reserve = async ({searchParams}: DashboardPagePropsType) => {
  const page = (await searchParams)?.page ?? "1";

  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden p-4 md:pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-sm md:text-2xl font-bold">درخواست‌های رزرو </h1>
      </div>
      <RequestTable page={page}/>
    </div>
  );
};

export default Reserve;
