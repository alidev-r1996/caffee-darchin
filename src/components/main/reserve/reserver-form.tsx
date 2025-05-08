"use client";

import { Button } from "@/components/ui/button";
import InputText from "@/components/ui/inputText";
import { AddReserve } from "@/lib/actions/reserver-action";
import DateInput from "@/components/ui/date-picker";
import TimeInput from "@/components/ui/time-picker";

const FormReserve = () => {
  return (
    <form
      action={async (formData: FormData) => {
        "use server";
        await AddReserve(formData);
      }}
      className="md:grid flex flex-col p-4  md:grid-cols-2 gap-4"
    >
      <InputText label="نام" name="name" placeholder="نام خود را وارد کنید" />
      <InputText
        label="شماره تماس"
        name="phone"
        placeholder="شماره تماس خود را وارد کنید"
      />
      <InputText
        label="تعداد نفرات"
        name="persons"
        type="number"
        placeholder="تعداد نفرات را وارد کنید"
        className="col-span-2"
      />
      <DateInput label="تاریخ" name="date" />
      <TimeInput label="ساعت" name="time" />
      <Button className="mt-4 col-span-2 w-full md:w-auto self-center px-8 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-md">
        درخواست رزرو
      </Button>
    </form>
  );
};

export default FormReserve;
