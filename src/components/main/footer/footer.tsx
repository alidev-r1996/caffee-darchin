import { ConvertToPersianDigit } from "@/helper/persianDigits";
import MapEmbed from "./map-embed";
import { Instagram, Twitter, Facebook  } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" flex flex-col bg-slate-50 mt-10">
      <div className="flex flex-col md:flex-row gap-8 p-4">
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <h1 className="font-bold text-xl">آدرس ما</h1>
        <p className="text-sm">
          استان قزوین، بوئین‌زهرا، انتهای خیابان ولیعصر شرقی، جنب اداره ارشاد
        </p>
        <MapEmbed />
      </div>
      <div className="flex flex-col gap-4 p-4 w-full md:w-1/2">
        <div className="flex flex-col flex-1 gap-4">
          <h1 className="font-bold text-xl mb-5">ساعت کاری ما</h1>
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <p>‌روزهای شنبه تا پنجشنبه </p>
            <p className="flex-1 border-dotted border-b border-b-zinc-600"></p>
            <p className="tracking-wider">
              از ساعت {ConvertToPersianDigit("08:00")}  تا &nbsp; 
              {ConvertToPersianDigit("23:45")}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <p>‌روزهای جمعه و تعطیل رسمی </p>
            <p className="flex-1 border-dotted border-b border-b-zinc-600"></p>
            <p className="tracking-wider">
              از ساعت {ConvertToPersianDigit("10:00")}  تا &nbsp; 
              {ConvertToPersianDigit("23:45")}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-around flex-1 gap-4 my-8 md:my-0">
          <h1 className="font-bold text-xl">
            ما رو در شبکه‌های اجتماعی دنبال کنید
          </h1>
          <div className="flex items-center justify-center gap-8">
            <p className="p-1 rounded transition-all duration-300 cursor-pointer hover:bg-rose-600 hover:text-white">
                <Instagram className="size-10"/>
            </p>
            <p className="p-1 rounded transition-all duration-300 cursor-pointer hover:bg-sky-500 hover:text-white">
                <Twitter className="size-10"/>
            </p>
            <p className="p-1 rounded transition-all duration-300 cursor-pointer hover:bg-blue-600 hover:text-white">
                <Facebook className="size-10"/>
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="py-3 text-center bg-slate-800 text-white">
        <p>تمامی حقوق مادی و معنوی این وبسایت متعلق به <strong className="text-rose-600">کافه رستوران دارچین</strong> می‌باشد.</p>
      </div>
    </footer>
  );
};

export default Footer;
