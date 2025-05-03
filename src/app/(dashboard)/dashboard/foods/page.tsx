import FoodTable from "./_components/food-table";
import AddFoodModal from "./_components/add-food-modal";
import { DashboardPagePropsType } from "../categories/_types/category.type";

const Foods = async ({searchParams}: DashboardPagePropsType) => {
  const page = (await searchParams)?.page ?? "1";


  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden p-4 md:pt-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">غذاها </h1>
        <AddFoodModal />
      </div>
      <FoodTable page={page}/>
    </div>
  );
};

export default Foods;
