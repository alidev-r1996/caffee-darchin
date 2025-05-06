import { TableUi } from "@/components/tableui";
import { ConvertToPersianDigit } from "@/helper/persianDigits";
import React from "react";
import EditFoodModal from "./edit-food.modal";
import RemoveFoodModal from "./remove-food.modal";
import { AvatarDemo } from "@/components/AvatarUi";
import { FoodRowProps } from "../_types/food.types";

const FoodRow: React.FC<FoodRowProps> = ({ index, item }) => {
  return (
    <TableUi.Row key={index} className="text-sm">
      <TableUi.Col>{ConvertToPersianDigit(`${index + 1}`)}</TableUi.Col>
      <TableUi.Col className="sticky right-0 z-10 bg-background">
      <p title={item.title} className="text-xs cursor-pointer">
          {item.title.slice(0, 20)}
          {item.title.length > 20 && "..."}
        </p>
      </TableUi.Col>
      <TableUi.Col>{ConvertToPersianDigit(item.price)} تومان</TableUi.Col>
      <TableUi.Col>
        {item.categories.map((i: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-wrap items-center gap-0.5 mx-auto"
            >
              <p className="rounded bg-slate-200 dark:bg-slate-700 px-4 py-0.5">
                {i.category.title}
              </p>
            </div>
          );
        })}
      </TableUi.Col>
      <TableUi.Col>
        <AvatarDemo src={item.img} className="mx-auto size-12" />
      </TableUi.Col>
      <TableUi.Col>{item.ingredients.join(", ")}</TableUi.Col>
      <TableUi.Col>
        <div className="flex gap-2 justify-center items-center">
          <EditFoodModal
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.img}
            rating={item.rating}
            ingredients={item.ingredients}
          />
          <RemoveFoodModal foodId={item.id} foodTitle={item.title} />
        </div>
      </TableUi.Col>
    </TableUi.Row>
  );
};

export default FoodRow;
