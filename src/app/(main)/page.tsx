import About from "@/components/main/about";
import Comments from "@/components/main/comments/comments";
import Menu from "@/components/main/menu/menu";
import Personel from "@/components/main/personel/personel";
import Reservation from "@/components/main/reserve/reserver-table";

type Props = {
  searchParams: Promise<{
    category: string;
  }>;
};

export default async function Home(props: Props) {
  const params = (await props.searchParams).category ?? "pizza";

  return (
    <main className="max-w-screen">
      <About />
      <Menu params={params}/>
      {/* <Comments /> */}
      <Reservation />
      <Personel />
    </main>
  );
}
