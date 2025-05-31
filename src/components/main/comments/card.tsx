import StartRating from "@/components/ui/StartRating";
import Image from "next/image";
import { FC, memo } from "react";

type commnetCardProps = {
  img: string;
  author: string;
  rating: number;
  text: string;
};

const CommentCard: FC<commnetCardProps> = ({ author, img, rating, text }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 shadow rounded-2xl md:p-4 p-2 flex items-start gap-4 md:min-w-[500px] w-full max-w-[95vw] h-max md:max-w-[500px] flex-[0_0_100%]">
      <Image
        src={`/images/comments/${img}`}
        alt={author}
        width={100}
        height={100}
        quality={60}
        loading="lazy"
        className="rounded-lg bg-contain"
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold dark:text-amber-500">{author}</h1>
          </div>
          <StartRating totalStars={5} rating={rating} size="small" />
        </div>

        <p className="text-zinc-500 text-xs md:leading-7 leading-5 line-clamp-3 md:line-clamp-4">
          {text}
        </p>
      </div>
    </div>
  );
};

export default memo(CommentCard);
