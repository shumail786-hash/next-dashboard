"use client";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between px-2 py-2 bg-clrBgSoft">
      <div className="text-clrTextSoft font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 bg-clrBg-2 px-2 py-2 rounded-md">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent rounded-none text-clrText outline-none"
          />
        </div>
        <div className="flex gap-5 cursor-pointer">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
