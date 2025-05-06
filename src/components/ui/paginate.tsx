"use client";

import convertToPersianDigits from "@/lib/utils/PersianDigits";
import { Paginate_number_maker } from "@/lib/utils/paginate";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { memo, useEffect, useMemo, useState } from "react";
import { BiChevronRight } from "react-icons/bi";

type PaginateProps = {
  theme: "red" | "green" | "blue";
  shape: "circle" | "square";
  totalPage: number;
  currentPage: string | number;
};

const btnStyle = {
  red: "hover:bg-rose-100 hover:text-rose-600 border border-rose-300 text-rose-600 hover:border-rose-600 dark:hover:bg-slate-700 dark:border-rose-800 dark:hover:text-rose-300",
  green: "hover:bg-emerald-100 hover:text-emerald-600 border border-emerald-300 text-emerald-600 hover:border-emerald-600 dark:hover:bg-slate-700 dark:border-emerald-800 dark:hover:text-emerald-300",
  blue: "hover:bg-blue-100 hover:text-blue-600 border border-blue-300 text-blue-600 hover:border-blue-600 dark:hover:bg-slate-700 dark:border-blue-800 dark:hover:text-blue-300",
};

const activeBtnStyle = {
  red: "!bg-rose-600 !text-white !border-none",
  green: "!bg-emerald-600 !text-white !border-none",
  blue: "!bg-blue-600 !text-white !border-none",
};

const shapeStyle = {
  circle: "rounded-full",
  square: "rounded",
};

const Paginate: React.FC<PaginateProps> = ({
  theme,
  shape,
  totalPage,
  currentPage,
}) => {
  const pathname = usePathname() ?? "";
  const searchParams = useSearchParams() ?? new URLSearchParams("");
  const router = useRouter();
  const [page, setPage] = useState(Number(currentPage ?? 1));

  const searchString = useMemo(() => searchParams.toString(), [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchString);
    params.set("page", String(page));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [page, pathname, searchString]);

  const pages = useMemo(() => Paginate_number_maker(totalPage, page), [page, totalPage]);

  return (
    <div dir="ltr" className="flex items-center gap-1 w-max [&>button]:cursor-pointer">
      {/* Previous Button */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className={`${btnStyle[theme]} ${shapeStyle[shape]} p-1 size-7 transition-all duration-300 disabled:!opacity-40 bg-transparent border disabled:pointer-events-none`}
      >
        <BiChevronRight className="w-full h-full rotate-180" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 [&>button]:cursor-pointer">
        {pages.map((i, index) => (
          <button
            key={index}
            disabled={i === "..."}
            onClick={() => typeof i === "number" && setPage(i)}
            className={`size-7 p-1 flex items-center justify-center ${shapeStyle[shape]} ${
              i !== "..." ? btnStyle[theme] : ""
            } ${page === i ? activeBtnStyle[theme] : ""}`}
          >
            {convertToPersianDigits(i.toString())}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        disabled={page === totalPage}
        onClick={() => setPage(page + 1)}
        className={`${btnStyle[theme]} ${shapeStyle[shape]} p-1 size-7 transition-all duration-300 disabled:!opacity-40 bg-transparent border disabled:pointer-events-none`}
      >
        <BiChevronRight className="w-full h-full" />
      </button>
    </div>
  );
};

export default memo(Paginate);
