import { TableUi } from "@/components/tableui";
import { ConvertToPersianDigit } from "@/helper/persianDigits";
import React from "react";
import EditFoodModal from "./edit-food.modal";
import RemoveFoodModal from "./remove-food.modal";
import { FoodRowProps } from "../_types/food.types";
import CardAvatar from "@/components/cardAvatar";
import TruncateText from "@/components/dashboard/truncate";

const FoodRow: React.FC<FoodRowProps> = ({ index, item, page }) => {

  return (
    <TableUi.Row key={index} className="text-sm">
      <TableUi.Col>{ConvertToPersianDigit(`${((page as number) - 1) * 8 + (index + 1)}`)}</TableUi.Col>
      <TableUi.Col className="sticky right-0 z-10 ">
        <TruncateText text={item.title} />
      </TableUi.Col>
      <TableUi.Col>{ConvertToPersianDigit(item.price)} تومان</TableUi.Col>
      <TableUi.Col>
        {item.categories.map((i: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-wrap items-center gap-0.5 mx-auto"
            >
              <TruncateText
                text={i.category.title}
                className="rounded bg-slate-200 dark:bg-slate-700 px-4 py-0.5"
              />
            </div>
          );
        })}
      </TableUi.Col>
      <TableUi.Col>
        <CardAvatar src={item.img} className="mx-auto size-12" />
      </TableUi.Col>
      <TableUi.Col>
        <TruncateText text={item.ingredients} />
      </TableUi.Col>
      <TableUi.Col>
        <div className="flex gap-2 justify-center items-center">
          <EditFoodModal
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.img}
            rating={item.rating}
            ingredients={item.ingredients}
            category={item.categories[0].category}
          />
          <RemoveFoodModal
            key={item.title}
            foodId={item.id}
            foodTitle={item.title}
          />
        </div>
      </TableUi.Col>
    </TableUi.Row>
  );
};

export default FoodRow;
