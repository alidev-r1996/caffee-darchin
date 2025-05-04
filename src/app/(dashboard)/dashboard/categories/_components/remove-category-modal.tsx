"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import { useRemoveCategory } from "../_hook/useCategory";

type RemoveCategoryModalProps = {
  categoryId: string;
  categoryTitle: string;
};

const RemoveCategoryModal = ({
  categoryId,
  categoryTitle,
}: RemoveCategoryModalProps) => {
  const { mutateAsync, isPending, open, setOpen } = useRemoveCategory(categoryId);

  return (
    <FormModal
      open={open}
      onClose={() => setOpen(!open)}
      label={`حذف دسته‌بندی ${categoryTitle} `}
      title="حذف  "
      buttonType="destructive"
      description={`آیا مطمئنید که می‌خواهید دسته‌بندی ${categoryTitle} را حذف کنید؟ این عمل غیرقابل بازگشت خواهد بود!`}
    >
      <Button onClick={() => mutateAsync()} variant="danger">
        {isPending ? "در حال حذف..." : "حذف"}
      </Button>
    </FormModal>
  );
};

export default RemoveCategoryModal;
