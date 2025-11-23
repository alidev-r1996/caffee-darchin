"use client";

import Image from "next/image";
import { memo, useState } from "react";

type CardAvatarProps = {
  src: string;
  alt?: string;
  className?: string;
};

const CardAvatar = ({ className = "", src, alt }: CardAvatarProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className={`${className} relative rounded overflow-hidden`}>
      <Image
        src={imgSrc || "/images/load-img-error.png"}
        alt={alt ?? "img"}
        fill
        sizes="(max-width: 768px) 100vw, 300px"
        className="object-cover peer text-transparent"
        onError={() => setImgSrc("/images/load-img-error.png")}
      />
    </div>
  );
};

export default memo(CardAvatar);
