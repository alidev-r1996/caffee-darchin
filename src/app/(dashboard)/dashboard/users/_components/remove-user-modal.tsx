"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import { RemoveUserProps } from "../_types/user.types";
import { useRemoveUser } from "../_hook/useUser";

const RemoveUserModal = ({ userId, userName }: RemoveUserProps) => {
  const { mutateAsync, isPending } = useRemoveUser(userId);

  return (
    <FormModal
      label={`حذف کاربر ${userName} `}
      title="حذف  "
      buttonType="destructive"
      description={`آیا مطمئنید که می‌خواهید کاربر ${userName} را حذف کنید؟ این عمل غیرقابل بازگشت خواهد بود!`}
    >
      <Button onClick={() => mutateAsync()} variant="danger">
        {isPending ? "در حال حذف..." : "حذف"}
      </Button>
    </FormModal>
  );
};

export default RemoveUserModal;
