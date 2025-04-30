import CategoryTable from "./category-table";
import AddCategoryModal from "./add-category-modal";

const Categories = () => {
  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden p-4 md:pt-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">دسته‌بندی‌ها</h1>
        <AddCategoryModal />
      </div>
      <CategoryTable />
    </div>
  );
};

export default Categories;
