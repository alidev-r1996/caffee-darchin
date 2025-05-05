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
      <main className="grid grid-cols-12 md:grid-rows-[70px_1fr] grid-rows-[auto_auto_1fr] max-w-screen-2xl mx-auto h-screen">
        <DashboardHeader />
        <SideBar />
        <div className="md:col-span-9 md:row-span-1 col-span-12 bg-background h-full p-4">
          {children}
        </div>
      </main>
    </ReactQueryProvider>
  );
}
