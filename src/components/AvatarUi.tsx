import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image"

type AvatarDemoProps = {
  src: string;
  fallback?: string;
  className?: string;
};

export function AvatarDemo({ src, fallback, className }: AvatarDemoProps) {
  return (
    // <Avatar className={className}>
    //   <AvatarImage src={src} alt="img" />
    //   <AvatarFallback>{fallback ? fallback : <ImageIcon />}</AvatarFallback>
    // </Avatar>
    <div className={`${className} relative`}>
      <Image src={src} alt='' fill referrerPolicy="no-referrer"/>
    </div>
  );
}
