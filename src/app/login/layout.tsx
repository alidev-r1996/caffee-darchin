import NavBar from "@/components/main/navbar/navbar";
import "../globals.css";
import Footer from "@/components/main/footer/footer";

export const metadata = {
  title: "صفحه ورود کاربران",
  description: "صفحه ورود کاربران کافه رستوران دارچین",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return  <main className="max-w-screen-2xl mx-auto dark:bg-slate-900 bg-slate-100">
      <NavBar />
      {children}
      <Footer />
    </main> ;
}
