"use client";

import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

const ReserveButton = ({userId}: {userId: Session | null;}) => {
  const { pending } = useFormStatus();

  useEffect(()=>{
  return ()=>{if (pending) toast.success("درخواست رزرو شما با موفقیت ثبت شد، همکاران ما در اولین فرصت با شما تماس خواهند گرفت!")}
  },[pending])

  return (
    <Button disabled={!userId} type="submit" className={`${pending && "animate-pulse"} mt-4 col-span-2 w-full md:w-auto self-center px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold shadow-md`}>
      {pending ? "در حال رزرو کردن..." : "درخواست رزرو"}
    </Button>
  );
};

export default ReserveButton;
