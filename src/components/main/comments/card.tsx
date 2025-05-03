import StartRating from "@/components/ui/StartRating";
import Image from "next/image";
import { FC, memo } from "react";

type commnetCardProps = {
  img: string;
  author: string;
  rating: number;
  text: string;
};

const CommentCard: FC<commnetCardProps> = ({
  author,
  img,
  rating,
  text,
}) => {
  return (
    <div className="bg-slate-50 shadow rounded-2xl p-4 flex items-start gap-4 min-w-[500px] h-max max-w-[500px] even:translate-y-16">
      <Image
  src={`/images/comments/${img}`}
  alt={author}
  width={150}
  height={150}
  quality={60}
  loading="lazy"
  className="rounded bg-contain"
/>
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold">{author}</h1>
          </div>
          <StartRating totalStars={5} rating={rating} size="small" />
        </div>

        <p className="text-zinc-500 text-xs leading-7">{text}</p>
      </div>
    </div>
  );
};

export default memo(CommentCard);
