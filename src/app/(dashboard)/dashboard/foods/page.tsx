"use client";


import { Button } from "@/components/ui/button";
import FoodTable from "./food-table";
import AddFoodModal from "./add-food-modal";


const Foods = () => {
  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden p-4 md:pt-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">غذاها </h1>
        <AddFoodModal />
      </div>
    <FoodTable />
    </div>
  );
};

export default Foods;
