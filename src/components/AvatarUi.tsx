import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image } from "lucide-react";

type AvatarDemoProps = {
  src: string;
  fallback?: string;
  className?: string;
};

export function AvatarDemo({ src, fallback, className }: AvatarDemoProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={`http://localhost:3000/api/image-proxy?url=${encodeURIComponent(src)}`} alt="img" />
      <AvatarFallback>{fallback ? fallback : <Image />}</AvatarFallback>
    </Avatar>
  );
}
