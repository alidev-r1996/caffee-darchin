import InputText from "@/components/ui/inputText";
import { Button } from "@/components/ui/button";
import DateInput from "@/components/ui/date-picker";
import TimeInput from "@/components/ui/time-picker";

const Reservation = () => {
  return (
    <div id="reserve" className="flex flex-col gap-4 my-4 w-full p-4">
      <h1 className="font-black text-2xl text-center my-5">رزرو میز </h1>
      <form
        action={async(formData:FormData)=>{
            "use server"
            console.log(formData)
        }}
        className="flex flex-col md:flex-row items-center md:flex-wrap gap-2 w-full p-4 border"
      >
        <InputText
          label="نام"
          name="name"
          placeholder="نام خود را وارد کنید"
          className="md:w-max flex-1"
        />
        <InputText
          label="شماره تماس"
          name="phone"
          placeholder="شماره تماس خود را وارد کنید"
          className="md:w-max flex-1"
        />
        <InputText
          label="تعداد نفرات"
          name="persons"
          type="number"
          placeholder=" تعداد نفرات را وارد کنید"
          className="md:w-max flex-1"
        />
        <DateInput label="تاریخ" name="date" />
        <TimeInput label="ساعت" name="time" />
        <Button className="mt-7 w-full md:w-max flex-1">درخواست رزرو</Button>
      </form>
    </div>
  );
};

export default Reservation;
