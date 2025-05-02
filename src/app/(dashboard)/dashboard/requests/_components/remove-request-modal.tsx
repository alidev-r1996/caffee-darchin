"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import { RemoveRequestProps } from "../_types/requests.types";
import { useRemoveRequest } from "../_hook/useRequest";

const RemoveRequestModal = ({ userId, userName }: RemoveRequestProps) => {
  const { mutateAsync, isPending } = useRemoveRequest(userId);

  return (
    <FormModal
      label={`حذف درخواست ${userName} `}
      title="حذف  "
      buttonType="destructive"
      description={`آیا مطمئنید که می‌خواهید درخواست رزرو ${userName} را حذف کنید؟ این عمل غیرقابل بازگشت خواهد بود!`}
    >
      <Button onClick={() => mutateAsync()} variant="danger">
        {isPending ? "در حال حذف..." : "حذف"}
      </Button>
    </FormModal>
  );
};

export default RemoveRequestModal;
