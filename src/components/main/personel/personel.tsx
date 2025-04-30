import Image from "next/image";

const Personel = () => {
    return ( 
        <div className="flex flex-col gap-4 my-4 w-full p-4">
      <h1 className="font-black text-2xl text-center my-5">خانواده دارچین </h1>

      <div className="flex flex-col md:flex-row items-center gap-4 cursor-pointer">
        <div className="relative flex-1 w-full aspect-square group overflow-hidden border-2 border-rose-400 rounded shadow">
            <Image src={'/images/personel/1.jpg'} alt=" " fill className="object-cover rounded shadow "/>
            <div className="bg-slate-800/60 absolute grid place-items-center size-full z-50 top-0 left-0 scale-x-0 group-hover:scale-x-100 transition-all duration-300">
                <div className="w-1/2 bg-white p-4 rounded-tl-none rounded text-center absolute translate-y-[500px] group-hover:translate-y-0 transition-all duration-500">
                   <p>علیرضا مولایی</p>
                   <p className="absolute -top-[57%] rounded left-0 px-3 py-1 bg-rose-500 text-white">مدیریت</p>
                </div>
            </div>
        </div>
        <div className="relative flex-1 w-full aspect-square group overflow-hidden border-2 border-rose-400 rounded shadow">
            <Image src={'/images/personel/2.jpg'} alt=" " fill className="object-cover rounded shadow "/>
            <div className="bg-slate-800/60 absolute grid place-items-center size-full z-50 top-0 left-0 scale-x-0 group-hover:scale-x-100 transition-all duration-300">
                <div className="w-1/2 bg-white p-4 rounded-tl-none rounded text-center absolute translate-y-[500px] group-hover:translate-y-0 transition-all duration-500">
                   <p>علیرضا مولایی</p>
                   <p className="absolute -top-[57%] rounded left-0 px-3 py-1 bg-rose-500 text-white">مدیریت</p>
                </div>
            </div>
        </div>
        <div className="relative flex-1 w-full aspect-square group overflow-hidden border-2 border-rose-400 rounded shadow">
            <Image src={'/images/personel/3.jpg'} alt=" " fill className="object-cover rounded shadow "/>
            <div className="bg-slate-800/60 absolute grid place-items-center size-full z-50 top-0 left-0 scale-x-0 group-hover:scale-x-100 transition-all duration-300">
                <div className="w-1/2 bg-white p-4 rounded-tl-none rounded text-center absolute translate-y-[500px] group-hover:translate-y-0 transition-all duration-500">
                   <p>علیرضا مولایی</p>
                   <p className="absolute -top-[57%] rounded left-0 px-3 py-1 bg-rose-500 text-white">مدیریت</p>
                </div>
            </div>
        </div>
        <div className="relative flex-1 w-full aspect-square group overflow-hidden border-2 border-rose-400 rounded shadow">
            <Image src={'/images/personel/4.jpg'} alt=" " fill className="object-cover rounded shadow "/>
            <div className="bg-slate-800/60 absolute grid place-items-center size-full z-50 top-0 left-0 scale-x-0 group-hover:scale-x-100 transition-all duration-300">
                <div className="w-1/2 bg-white p-4 rounded-tl-none rounded text-center absolute translate-y-[500px] group-hover:translate-y-0 transition-all duration-500">
                   <p>علیرضا مولایی</p>
                   <p className="absolute -top-[57%] rounded left-0 px-3 py-1 bg-rose-500 text-white">مدیریت</p>
                </div>
            </div>
        </div>
      </div>


      </div>
     );
}
 
export default Personel;