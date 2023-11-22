"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({ count }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEMS_PER_PAGE = 6;

  const hasPrev = ITEMS_PER_PAGE * parseInt(page - 1) > 0;

  const hasNext = ITEMS_PER_PAGE * parseInt(page - 1) + ITEMS_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="flex justify-between mt-3">
      <button
        className="py-1 px-3 text-sm bg-clrText text-black disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className="py-1 px-3 cursor-pointer text-sm bg-clrText text-black disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
