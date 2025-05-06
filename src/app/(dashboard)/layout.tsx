import type { Metadata } from "next";
import "../globals.css";
import ReactQueryProvider from "@/components/provider/react-query-provider";
import SideBar from "@/components/dashboard/sidebar";
import DashboardHeader from "@/components/dashboard/header";

export const metadata: Metadata = {
  title: "داشبورد مدیریت",
  description: "پنل کاربری کافه رستوران دارچین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <main className="grid grid-cols-12 grid-rows-[60px_1fr] max-w-screen-2xl mx-auto h-screen">
        <DashboardHeader />
        <SideBar />
        <div className="md:col-span-9 col-span-10 bg-background h-full md:p-4">
          {children}
        </div>
      </main>
    </ReactQueryProvider>
  );
}
