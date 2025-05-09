import InputText from "@/components/ui/inputText";
import { AddReserve } from "@/lib/actions/reserver-action";
import DateInput from "@/components/ui/date-picker";
import TimeInput from "@/components/ui/time-picker";
import ReserveButton from "./reserver-button";
import { auth } from "@/auth";

const FormReserve = async() => {
  const userId = await auth() ?? null;

  return (
    <form
      action={async (formData) => {
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
      <ReserveButton userId={userId}/>
      {!userId && <p className="text-rose-500 text-xs text-center col-span-2">ابتدا باید وارد حساب کاربری خود شوید!</p>}
    </form>
  );
};

export default FormReserve;
