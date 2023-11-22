"use client";
import { MdSearch } from "react-icons/md";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const Search = ({ placeholder }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="flex items-center gap-1 bg-[#2e374a] px-1 py-1 w-max rounded-md">
      <MdSearch />
      <input
        type="text"
        name=""
        placeholder={placeholder}
        className="bg-transparent border-none text-clrText outline-none text-sm"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
