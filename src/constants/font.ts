import localFont from "next/font/local";

export const iranSans = localFont({
  src: [
    {
      path: "../../public/font/IRANSansWeb_UltraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/font/IRANSansWeb_Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/IRANSansWeb.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/IRANSansWeb_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/IRANSansWeb_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/IRANSansWeb_Black.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
  display: "swap",
});