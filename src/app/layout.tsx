import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { ThemeProvider } from "@/components/provider/theme-provider";
import "./globals.css";
import RegisterSW from "../lib/pwa/register";
import InstallPWA from "@/lib/pwa/install";
import { Toaster } from "@/components/ui/sonner"

const font = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "کافه رستوران دارچین",
  description: "cafe restuarant darchin",
  manifest: '/manifest.webmanifest', 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="rtl"
      suppressHydrationWarning
      className="scroll-smooth snap-mandatory"
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Darchin Caffee" />
      </head>
      <body className={`${font.className} antialiased`}>
        <InstallPWA />
        <RegisterSW />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="discord-theme"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-screen-2xl mx-auto">
            {children}
          </main>
          <Toaster toastOptions={{ className: "font-[Vazirmatn]" }}/>
        </ThemeProvider>
      </body>
    </html>
  );
}
