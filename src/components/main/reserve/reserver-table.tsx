"use client";

import { Button } from "@/components/ui/button";
import DateInput from "@/components/ui/date-picker";
import TimeInput from "@/components/ui/time-picker";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import FadeUp from "./Fadeup-animate";
import Image from "next/image";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import RegisterInput from "@/components/ui/registerInput";
import { reserveFormItems } from "@/constants/constant";
import { toast } from "sonner";
import { DateObject } from "react-multi-date-picker";

export const reserveSchema = z.object({
  name: z.string().min(2, "نام باید حداقل ۲ حرف باشد"),
  phone: z.string().min(9, "شماره موبایل معتبر نیست"),
  persons: z.string().min(1, "وارد کردن تعداد نفرات الزامی است"),
  date: z.date({ required_error: "انتخاب کردن تاریخ الزامی است" }),
  time: z.date({ required_error: "انتخاب کردن زمان الزامی است" }),
});

export type ContactFormData = z.infer<typeof reserveSchema>;

const Reservation = () => {
  const [loading, setLoading] = useState(false);

  const { register, formState, handleSubmit, control, reset } =
    useForm<ContactFormData>({
      mode: "onSubmit",
      resolver: zodResolver(reserveSchema),
    });

  const submitHandler: SubmitHandler<ContactFormData> = async (values) => {
    const persianTime = values.time.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h24",
    });
    const persianDate = values.date.toLocaleDateString("fa-IR");

    setLoading(true);

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("persons", values.persons);
    formData.append("time", persianTime);
    formData.append("date", persianDate);

    const url = process.env.NODE_ENV == "development"? "https://www.caffee-darchin.ir/api/reserve": "http://localhost:3000/api/reserve"

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const { message } = await res.json();
    toast(message);
    reset();
    setLoading(false);
  };

  return (
    <FadeUp>
      <section className="relative w-full my-16 py-10 px-4 md:px-8 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900">
        <div className="max-w-6xl w-full rounded overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-slate-800">
          {/* IMAGE */}
          <div className="hidden md:block relative h-full w-full object-cover">
            <Image src={"/images/reserve.jpg"} fill alt="" />
          </div>

          {/* FORM */}
          <div className="md:px-6 md:p-4 flex flex-col justify-center w-full">
            <h2 className="text-2xl font-black text-center my-6 text-teal-600 dark:text-teal-100">
              رزرو میز
            </h2>
            <form className="md:grid flex flex-col p-4 md:grid-cols-2 gap-4">
              {reserveFormItems.map((item) => (
                <RegisterInput
                  key={item.id}
                  {...item}
                  register={register}
                  formState={formState}
                />
              ))}
              <div className="flex flex-col w-full">
              <Controller
                name="date"
                control={control}
                defaultValue={new Date()}
                render={({ field }) => (
                  <DateInput
                    label="تاریخ"
                    value={field.value}
                    onChange={(value) => {
                      if (value instanceof DateObject) {
                        field.onChange(value.toDate());
                      } else {
                        field.onChange(value);
                      }
                    }}
                  />
                )}
              />
              {formState.errors && formState.errors.date && (
                <p className="text-rose-500 pl-2 text-[10px]">
                  {formState.errors.date.message}
                </p>
              )}
              </div>
              <div className="flex flex-col w-full">
              <Controller
                name="time"
                control={control}
                defaultValue={new Date()}
                render={({ field }) => (
                  <TimeInput
                    label="ساعت"
                    value={field.value}
                    onChange={(value) => {
                      if (value instanceof DateObject) {
                        field.onChange(value.toDate());
                      } else {
                        field.onChange(value);
                      }
                    }}
                  />
                )}
              />
               {formState.errors && formState.errors.time && (
                <p className="text-rose-500 pl-2 text-[10px]">
                  {formState.errors.time.message}
                </p>
              )}
              </div>
              <Button
                type="submit"
                onClick={handleSubmit(submitHandler)}
                className={`${loading && "animate-pulse"} mt-4 col-span-2 w-full md:w-auto self-center px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold shadow-md`}
              >
                {loading ? "درحال رزرو..." : "درخواست رزرو"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </FadeUp>
  );
};

export default Reservation;
