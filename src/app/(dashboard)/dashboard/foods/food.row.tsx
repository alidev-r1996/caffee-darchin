"use client";

import { TableUi } from "@/components/tableui";
import { Button } from "@/components/ui/button";
import { ConvertToPersianDigit } from "@/helper/persianDigits";
import { RemoveCategory } from "@/lib/actions/category-action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import EditFoodModal from "./edit-food.modal";

type FoodRowProps = {
  index: number;
  item: any;
};

const FoodRow: React.FC<FoodRowProps> = ({ index, item }) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (id: string) => {
      return await RemoveCategory(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foods"] });
    },
  });

  return (
    <TableUi.Row key={index} className="text-sm">
      <TableUi.Col>{index + 1}</TableUi.Col>
      <TableUi.Col className="sticky right-0 z-10 bg-background">
        {item.title}
      </TableUi.Col>
      <TableUi.Col>{ConvertToPersianDigit(item.price)} تومان</TableUi.Col>
      <TableUi.Col>
        {item.categories.map((i: any, index: number) => {
        return <div key={index} className="flex flex-wrap items-center gap-0.5 mx-auto">
            <p className="rounded bg-muted px-4 py-0.5">{i.category.title}</p>
          </div>
        })}
      </TableUi.Col>
      <TableUi.Col>
        <Image
          src={item.img}
          alt=""
          width={50}
          height={50}
          className="mx-auto"
        />
      </TableUi.Col>
      <TableUi.Col>{item.ingredients.join(", ")}</TableUi.Col>
      <TableUi.Col>
        <div className="flex gap-2 justify-center items-center">
          <EditFoodModal id={item.id} title={item.title} price={item.price} image={item.img} rating={item.rating} ingredients={item.ingredients}/>
          <Button onClick={() => mutateAsync(item.id)} variant="danger">
            {isPending ? "در حال حذف..." : "حذف"}
          </Button>
        </div>
      </TableUi.Col>
    </TableUi.Row>
  );
};

export default FoodRow;
