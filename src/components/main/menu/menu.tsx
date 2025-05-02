import MenuContent from "./content-menu";
import TabMenu from "./tab-menu";

async function getCategory() {
  const res = await fetch("https://caffee-darchin.vercel.app/api/categories", {next:{tags:["category"]}});
  return res.json();
}

async function getFoods(params: string) {
  const res = await fetch(`https://caffee-darchin.vercel.app/api/foods?title=${params}`, {next:{tags:["food"]}});
  return res.json();
}

export default async function Menu({ params }: { params: string }) {
  const [category, foods] = await Promise.all([getCategory(), getFoods(params)]);

  return (
    <div id="menu" className="flex flex-col gap-4">
      <TabMenu category={category} />
      <MenuContent foods={foods} />
    </div>
  );
}
