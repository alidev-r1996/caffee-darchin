"use client";

import Image from "next/image";
import { memo } from "react";

type UserAvatarProps = {
  src: string;
  alt?: string;
  className?: string;
};

const UserAvatar = ({ className, src, alt }: UserAvatarProps) => {
  return (
    <div className={`${className} relative rounded-full overflow-hidden`}>
      <Image
        src={src}
        alt={alt ?? "img"}
        fill
        sizes="100vw"
        referrerPolicy="no-referrer"
        className="object-fill peer text-transparent"
        onError={(event) =>
          (event.currentTarget.src = "/images/load-img-error.png")
        }
      />
    </div>
  );
};

export default memo(UserAvatar);
