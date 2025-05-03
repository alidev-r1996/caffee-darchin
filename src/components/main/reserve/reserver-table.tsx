import InputText from "@/components/ui/inputText";
import { Button } from "@/components/ui/button";
import DateInput from "@/components/ui/date-picker";
import TimeInput from "@/components/ui/time-picker";
import { AddReserve } from "@/lib/actions/reserver-action";

const Reservation = () => {
  return (
    <section
      id="reserve"
      className="relative w-full my-10 py-10 px-4 md:px-8 flex flex-col items-center justify-center bg-slate-100"
    >
      <div className="max-w-6xl w-full rounded overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-slate-800">
        {/* IMAGE */}
        <div className="hidden md:block">
          <img
            src="/images/reserve.jpg" //
            alt="رزرو میز"
            className="h-full w-full object-cover"
          />
        </div>

        {/* FORM */}
        <div className="md:px-6 md:p-4 flex flex-col justify-center w-full ">
          <h2 className="text-2xl font-black text-center mb-6  text-amber-600 dark:text-amber-400">
            رزرو میز
          </h2>
          <form
            action={async (formData: FormData) => {
              "use server";
              await AddReserve(formData);
            }}
            className="md:grid flex flex-col p-4  md:grid-cols-2 gap-4"
          >
            <InputText
              label="نام"
              name="name"
              placeholder="نام خود را وارد کنید"
            />
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
        </div>
      </div>
    </section>
  );
};

export default Reservation;
