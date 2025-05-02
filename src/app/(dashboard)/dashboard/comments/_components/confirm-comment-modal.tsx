"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import { useConfirmComment } from "../_hook/useComment";
import { ConfirmCommentProps } from "../_types/comments.types";



const ConfirmCommentModal = ({
  userId,
  userName,
  foodId,
  status,
  time,
}: ConfirmCommentProps) => {
  const { open, setOpen, mutateAsync, isPending } = useConfirmComment({
    foodId,
    status,
    time,
    userId,
  });

  return (
    <FormModal
      open={open}
      onClose={() => setOpen(!open)}
      label={` ${status ? "عدم تأیید" : "تأیید"} نظر ${userName} `}
      title="تغییر وضعیت "
      buttonType="outline"
      description={`آیا مطمئنید که می‌خواهید نظر ${userName}  را ${
        status ? "رد کنید" : "تأیید کنید"
      }؟`}
    >
      <Button
        onClick={() => mutateAsync()}
        className={`${status ? "bg-rose-600" : "bg-green-600"}`}
      >
        {isPending ? "در حال تغییر وضعیت..." : status ? "عدم تایید" : "تایید"}
      </Button>
    </FormModal>
  );
};

export default ConfirmCommentModal;
