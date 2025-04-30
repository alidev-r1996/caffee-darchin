"use client"

import { TableUi } from "@/components/tableui";
import { Button } from "@/components/ui/button";
import { RemoveFood } from "@/lib/actions/food-action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import EditCategoryModal from "./Edit-category-modal";

type CategoryRowProps = {
  index: number;
  item: any;
};

const CategoryRow: React.FC<CategoryRowProps> = ({ index, item }) => {
    const queryClient = useQueryClient();
    

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (id: string) => {
      return await RemoveFood(id);
    },
    onSuccess: ()=>{
        queryClient.invalidateQueries({ queryKey: ["categories"] });
    }
  });

  return (
    <TableUi.Row key={index}>
      <TableUi.Col>{index + 1}</TableUi.Col>
      <TableUi.Col className="sticky right-0 z-10 bg-background">
        {item.title}
      </TableUi.Col>
      <TableUi.Col>{item.englishTitle}</TableUi.Col>
      <TableUi.Col>
        <Image
          src={item.img}
          alt=""
          width={50}
          height={50}
          className="mx-auto"
        />
      </TableUi.Col>
      <TableUi.Col>
        <div className="flex gap-2 justify-center items-center">
          <EditCategoryModal id={item.id} title={item.title} englishTitle={item.englishTitle} image={item.img} />
          <Button onClick={() => mutateAsync(item.id)} variant="danger">
            {isPending ? "در حال حذف..." : "حذف"}
          </Button>
        </div>
      </TableUi.Col>
    </TableUi.Row>
  );
};

export default CategoryRow;
