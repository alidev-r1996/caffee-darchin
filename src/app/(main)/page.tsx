import dynamic from "next/dynamic";

import About from "@/components/main/about";
const Comments = dynamic(() => import("@/components/main/comments/comments"));
import Menu from "@/components/main/menu/menu";
const Personel = dynamic(()=>import("@/components/main/personel/personel"))
import Reservation from "@/components/main/reserve/reserver-table";
import { Suspense } from "react";
import Loading from "@/components/loading";

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
      <Menu params={params} />
      {/* <Suspense fallback={<Loading />}><Comments /></Suspense> */}
      <Reservation />
      <Suspense fallback={<Loading />}>
        <Personel />
      </Suspense>
    </main>
  );
}
