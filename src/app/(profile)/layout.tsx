import type { Metadata } from "next";
import "../globals.css";
import ReactQueryProvider from "@/components/provider/react-query-provider";
import DashboardHeader from "@/components/dashboard/header";
import SideBar from "@/components/profile/sidebar";

export const metadata: Metadata = {
  title: "پروفایل کاربری ",
  description: "پنل کاربری کافه رستوران دارچین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <main className="grid grid-cols-12 grid-rows-[70px_1fr] max-w-screen-2xl mx-auto h-screen">
        <DashboardHeader />
        <SideBar />
        <div className="md:col-span-9 col-span-10 bg-background h-full md:p-4">
          {children}
        </div>
      </main>
    </ReactQueryProvider>
  );
}
