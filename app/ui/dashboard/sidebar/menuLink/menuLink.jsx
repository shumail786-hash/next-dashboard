"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const MenuLink = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`flex px-3 py-3 m-1 rounded-md items-center gap-2 hover:bg-clrBg-2  ${
        pathname === item.path && "bg-clrBg-2"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
