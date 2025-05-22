"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Orders = () => {
    const router =useRouter();


    useEffect(()=>{
       const timeout =  setTimeout(()=>{
            router.push('/profile')
        },3000)
    
    return ()=>{clearTimeout(timeout)}
    })


    return ( 
        <div className="flex w-full h-full items-center justify-center">
            <p className=" animate-pulse font-bold text-xl bg-rose-500 text-white roundec px-5 py-1 rounded shadow text-center">هنوز توسعه داده نشده است</p>
        </div>
     );
}
 
export default Orders;