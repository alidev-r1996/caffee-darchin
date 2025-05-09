"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const ReserveButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="mt-4 col-span-2 w-full md:w-auto self-center px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold shadow-md">
      {pending ? "در حال رزرو کردن" : "درخواست رزرو"}
    </Button>
  );
};

export default ReserveButton;
