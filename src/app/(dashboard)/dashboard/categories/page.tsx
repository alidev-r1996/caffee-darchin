import CategoryTable from "./_components/category-table";
import AddCategoryModal from "./_components/add-category-modal";
import { DashboardPagePropsType } from "./_types/category.type";

const Categories = async({searchParams}: DashboardPagePropsType) => {
  const page = (await searchParams)?.page ?? "1";
  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden p-4 md:pt-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-sm md:text-2xl">دسته‌بندی‌ها</h1>
        <AddCategoryModal />
      </div>
      <CategoryTable page={page}/>
    </div>
  );
};

export default Categories;
