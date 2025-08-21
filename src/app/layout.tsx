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
  title: "کافه رستوران دارچین | بهترین کافی‌شاپ و رستوران در شهر شما",
  description:
    "کافه رستوران دارچین | لذت غذاهای ایرانی و فرنگی، انواع نوشیدنی گرم و سرد، دسرهای خاص و فضایی دلنشین برای قرارهای دوستانه و خانوادگی.",
  manifest: "/manifest.webmanifest",
  keywords: [
    "کافه دارچین",
    "بوئین زهرا",
    "کافه بوئین‌ زهرا",
    "رستوران بوئین زهرا",
    "گردشگری بوئین زهرا",
    "رستوران دارچین",
    "کافی شاپ",
    "کافه",
    "رستوران",
    "کافه رستوران",
    "کافه در تهران",
    "بهترین کافه",
    "بهترین رستوران",
    "رزرو میز کافه",
    "منوی کافی شاپ",
    "کافه با اینترنت",
    "کافه شیک",
    "کافه رومانتیک",
    "کافه برای تولد",
    "کافه خانوادگی",
    "کافه صبحانه",
    "کافه ناهار",
    "کافه شام",
    "کیک و دسر",
    "نوشیدنی گرم",
    "قهوه اسپرسو",
    "کاپوچینو",
    "لاته",
    "چای و دمنوش",
    "غذای ایرانی",
    "غذای فرنگی",
    "پیتزا",
    "پاستا",
    "برگر",
    "سالاد",
    "سوشی",
    "غذای سالم",
    "فست فود",
    "غذای گیاهی",
    "کافه دنج",
    "کافه 24 ساعته",
    "کافه با موسیقی زنده",
    "کافه برای قرار کاری",
    "کافه مناسب زوج‌ها",
    "رستوران لوکس",
    "رزرو آنلاین کافه"
  ],
  openGraph: {
    title: "کافه رستوران دارچین",
    description:
      "کافه رستوران دارچین | طعم متفاوت قهوه و غذاهای خاص در محیطی دلنشین.",
    url: "https://www.darchin-cafe.ir",
    siteName: "کافه رستوران دارچین",
    images: [
      {
        url: "/favicon/icon-512x512.png",
        width: 800,
        height: 600,
        alt: "کافه رستوران دارچین",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "کافه رستوران دارچین",
    description:
      "بهترین کافه و رستوران برای دورهمی‌ها، جشن‌ها و لحظات خاص شما.",
    images: ["/favicon/icon-512x512.png"],
  },
  alternates: {
    canonical: "https://www.darchin-cafe.ir",
  },
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
