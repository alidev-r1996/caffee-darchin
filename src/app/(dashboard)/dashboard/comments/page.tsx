import { DashboardPagePropsType } from "../categories/_types/category.type";
import CommentTable from "./_components/commnet-table";

const Comments = async ({searchParams}: DashboardPagePropsType) => {
  const page = (await searchParams)?.page ?? "1";

  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden p-4 md:pt-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">نظرات کاربران </h1>
      </div>
      <CommentTable page={page}/>
    </div>
  );
};

export default Comments;
