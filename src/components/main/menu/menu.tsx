import MenuContent from "./content-menu";
import TabMenu from "./tab-menu";

async function getCategory() {
  const res = await fetch("http://localhost:3000/api/categories", {next:{tags:["category"]}});
  return res.json();
}

async function getFoods(params: string) {
  const res = await fetch(`http://localhost:3000/api/foods?title=${params}`, {next:{tags:["food"]}});
  return res.json();
}

export default async function Menu({ params }: { params: string }) {
  const [category, foods] = await Promise.all([getCategory(), getFoods(params)]);

  return (
    <div id="menu" className="flex flex-col gap-4">
      <h1 className="font-black text-2xl text-center my-5">منوی اصلی</h1>
      <TabMenu category={category} />
      <MenuContent foods={foods} />
    </div>
  );
}
