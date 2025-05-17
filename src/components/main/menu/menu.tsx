import { memo } from "react";
import MenuContent from "./content-menu";
import TabMenu from "./tab-menu";

async function getCategory() {
  const res = await fetch("https://www.cafe-darchin.ir/api/categories", {next:{tags:["category"]}});
  return res.json();
}

async function getFoods(params: string) {
  const res = await fetch(`https://www.cafe-darchin.ir/api/foods?title=${params}`, {next:{tags:["food"]}});
  return res.json();
}

const Menu = async({ params }: { params: string }) => {
  const [category, foods] = await Promise.all([getCategory(), getFoods(params)]);

  return (
    <div id="menu" className="flex flex-col gap-4 max-w-full overflow-hidden">
      <TabMenu category={category} />
      <MenuContent foods={foods} />
    </div>
  );
}

export default Menu;
