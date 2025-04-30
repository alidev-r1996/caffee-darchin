import Image from "next/image";

const Profile = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
      <div className="bg-background border rounded h-40 flex items-center gap-2">
        <div className="relative h-full aspect-[8/7]">
          <Image src={"/images/dashboard/food.jpg"} alt="" fill />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mx-auto">
          <p className="text-lg">تعداد کل غذا‌ها</p>
          <p className="text-center p-1 size-10 shadow grid place-items-center mx-auto rounded bg-accent mt-2">
            12
          </p>
        </div>
      </div>
      <div className="bg-background border rounded h-40 flex items-center gap-2">
        <div className="relative h-full aspect-[8/7]">
          <Image src={"/images/dashboard/pizza.jpg"} alt="" fill />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mx-auto">
          <p className="text-lg">تعداد کل پیتزاها</p>
          <p className="text-center p-1 size-10 shadow grid place-items-center mx-auto rounded bg-accent mt-2">
            12
          </p>
        </div>
      </div>
      <div className="bg-background border rounded h-40 flex items-center gap-2">
        <div className="relative h-full aspect-[8/7]">
          <Image src={"/images/dashboard/caffee.jpg"} alt="" fill />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mx-auto">
          <p className="text-lg">تعداد کل قهوه‌ها</p>
          <p className="text-center p-1 size-10 shadow grid place-items-center mx-auto rounded bg-accent mt-2">
            12
          </p>
        </div>
      </div>
      <div className="bg-background border rounded h-40 flex items-center gap-2">
        <div className="relative h-full aspect-[8/7]">
          <Image src={"/images/dashboard/drink.jpg"} alt="" fill />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mx-auto">
          <p className="text-lg">تعداد کل نوشیدنی‌ها</p>
          <p className="text-center p-1 size-10 shadow grid place-items-center mx-auto rounded bg-accent mt-2">
            12
          </p>
        </div>
      </div>
      <div className="bg-background border rounded h-40 flex items-center gap-2">
        <div className="relative h-full aspect-[8/7]">
          <Image src={"/images/dashboard/desert.jpg"} alt="" fill />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mx-auto">
          <p className="text-lg">تعداد کل دسرها</p>
          <p className="text-center p-1 size-10 shadow grid place-items-center mx-auto rounded bg-accent mt-2">
            12
          </p>
        </div>
      </div>
      <div className="bg-background border rounded h-40 flex items-center gap-2">
        <div className="relative h-full aspect-[8/7]">
          <Image src={"/images/dashboard/ice.jpg"} alt="" fill />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mx-auto">
          <p className="text-lg">تعداد کل بستنی‌ها</p>
          <p className="text-center p-1 size-10 shadow grid place-items-center mx-auto rounded bg-accent mt-2">
            12
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
