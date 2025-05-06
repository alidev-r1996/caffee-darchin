import Image from "next/image";

type CardAvatarProps = {
  src: string;
  alt?: string;
  className?: string;
};

const CardAvatar = ({ className, src, alt }: CardAvatarProps) => {
  return (
    <div className={`${className} relative rounded overflow-hidden`}>
      <Image
        src={src}
        alt={alt ?? " "}
        fill
        referrerPolicy="no-referrer"
        className="object-fill peer"
        onError={(event) =>
          (event.currentTarget.src = "/images/load-img-error.png")
        }
      />
    </div>
  );
};

export default CardAvatar;
