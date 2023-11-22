import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-1 bg-[#2e374a] px-1 py-1 w-max rounded-md">
      <MdSearch />
      <input
        type="text"
        name=""
        placeholder={placeholder}
        className="bg-transparent border-none text-clrText outline-none text-sm"
      />
    </div>
  );
};

export default Search;
