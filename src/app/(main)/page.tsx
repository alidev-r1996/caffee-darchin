import dynamic from "next/dynamic";

import About from "@/components/main/about";
import Menu from "@/components/main/menu/menu";
import Reservation from "@/components/main/reserve/reserver-table";
import Personel from "@/components/main/personel/personel";
import Comments from "@/components/main/comments/comments";


type Props = {
  searchParams: Promise<{
    category: string;
  }>;
};

export default async function Home(props: Props) {
  const params = (await props.searchParams).category ?? "burger";

  return (
    <div className="max-w-screen">
      <About />
      <Menu params={params} />
      <Reservation />
      <Comments />
      <Personel />
    </div>
  );
}
