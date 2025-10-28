import "../globals.css";
import NavBar from "@/components/main/navbar/navbar";
import Footer from "@/components/main/footer/footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-screen-2xl mx-auto dark:bg-slate-900 bg-slate-100">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
