import { ConvertToPersianDigit } from "@/helper/persianDigits";
import { AvatarDemo } from "@/components/AvatarUi";

const MenuContent = ({ foods }: {foods: any[]}) => {

  if (foods == null) return <div></div>

    return ( 
        <div className="grid grid-col-1 md:grid-cols-2 gap-4 p-4 gap-x-8">
        {foods && foods.map((item) => {
          return (
            <div key={item.id} className="flex items-center gap-2">
              <div className="relative size-16 md:size-20">
              <AvatarDemo src={item.img} className="size-16 md:size-20 object-fill"/>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-1.5 text-sm md:text-base">
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="flex-1 border-dotted border-b-2 border-b-zinc-400"></p>
                  <div className="flex items-center gap-0.5 text-rose-600 dark:text-amber-600">
                    <strong> {ConvertToPersianDigit(item.price)}</strong>
                    <p>تومان</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs md:text-sm">
                  {(item?.ingredients as string[]).join("، ")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
     );
}
 
export default MenuContent;