import FadeUp from "./Fadeup-animate";
import Image from "next/image";
import FormReserve from "./reserver-form";

const Reservation = () => {
  return (
    <FadeUp>
      <section
        id="reserve"
        className="relative w-full my-16 py-10 px-4 md:px-8 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900"
      >
        <div className="max-w-6xl w-full rounded overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-slate-800">
          {/* IMAGE */}
          <div className="hidden md:block relative h-full w-full object-cover">
            <Image src={'/images/reserve.jpg'} fill alt=""/>
          </div>

          {/* FORM */}
          <div className="md:px-6 md:p-4 flex flex-col justify-center w-full ">
            <h2 className="text-2xl font-black text-center my-6 text-amber-600 dark:text-amber-400">
              رزرو میز
            </h2>
            <FormReserve />
          </div>
        </div>
      </section>
    </FadeUp>
  );
};

export default Reservation;
