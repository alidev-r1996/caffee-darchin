"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import { useRemoveComment } from "../_hook/useComment";
import { RemoveCommentProps } from "../_types/comments.types";



const RemoveCommentModal = ({
  userId,
  userName,
  foodId,
  time,
}: RemoveCommentProps) => {
  const { isPending, mutateAsync, open, setOpen } = useRemoveComment({
    userId,
    foodId,
    time,
  });

  return (
    <FormModal
      open={open}
      onClose={() => setOpen(!open)}
      label={`حذف نظر ${userName} `}
      title="حذف"
      buttonType="destructive"
      description={`آیا مطمئنید که می‌خواهید نظر  ${userName} را حذف کنید؟ این عمل غیرقابل بازگشت خواهد بود!`}
    >
      <Button onClick={() => mutateAsync()} variant="danger">
        {isPending ? "در حال حذف..." : "حذف"}
      </Button>
    </FormModal>
  );
};

export default RemoveCommentModal;
