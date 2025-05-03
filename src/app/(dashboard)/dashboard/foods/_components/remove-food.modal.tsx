"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import { RemoveFood } from "@/lib/actions/food-action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UseRemoveFood } from "../_hook/useFood";

type RemoveFoodModalProps = {
  foodId: string;
  foodTitle: string;
};

const RemoveFoodModal = ({ foodId, foodTitle }: RemoveFoodModalProps) => {
  const { isPending, mutateAsync } = UseRemoveFood(foodId);

  return (
    <FormModal
      label={`حذف غذای ${foodTitle} `}
      title="حذف  "
      buttonType="destructive"
      description={`آیا مطمئنید که می‌خواهید غذای ${foodTitle} را حذف کنید؟ این عمل غیرقابل بازگشت خواهد بود!`}
    >
      <Button onClick={() => mutateAsync()} variant="danger">
        {isPending ? "در حال حذف..." : "حذف"}
      </Button>
    </FormModal>
  );
};

export default RemoveFoodModal;
