"use client";

import Image from "next/image";
import { memo, useState } from "react";

type UserAvatarProps = {
  src: string;
  alt?: string;
  className?: string;
};

const UserAvatar = ({ className = "", src, alt }: UserAvatarProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className={`${className} relative rounded-full overflow-hidden`}>
      <Image
        src={imgSrc || "/images/load-img-error.png"}
        alt={alt ?? "user avatar"}
        fill
        sizes="(max-width: 768px) 100vw, 80px"
        className="object-cover peer text-transparent"
        referrerPolicy="no-referrer"
        onError={() => setImgSrc("/images/load-img-error.png")}
      />
    </div>
  );
};

export default memo(UserAvatar);
