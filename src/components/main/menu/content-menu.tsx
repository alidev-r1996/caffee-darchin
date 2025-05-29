import FoodCardMenu from "./food-card-menu";
import { memo } from "react";

const MenuContent = ({ foods }: {foods: any[]}) => {

  if (foods == null) return <div></div>

    return ( 
        <div className="grid  md:grid-cols-3 gap-4 p-4 gap-x-8 max-w-full">
        {foods && foods.map((item, index) => {
          return (
           <FoodCardMenu key={item.id} item={item} index={index} />
          );
        })}
      </div>
     );
}
 
export default memo(MenuContent);