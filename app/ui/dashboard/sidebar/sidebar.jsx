import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink.jsx";
import Image from "next/image.js";
import { auth } from "@/app/auth.js";
import { signOut } from "@/app/auth.js";
const Sidebar = async () => {
  const { user } = await auth();
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          src={user?.img || "/noavatar.png"}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-bold capitalize">{user?.username}</span>
          <span className="text-sm text-clrTextSoft">
            {user?.isAdmin === true ? "Admin" : "Client"}
          </span>
        </div>
      </div>
      <ul className="text-clrTextSoft font-bold text-[15px] my-3">
        {menuItems.map((items, index) => (
          <li key={index}>
            <span className="">{items.title}</span>
            {items.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="px-4 py-4 my-5 flex items-center gap-2 cursor-pointer rounded-lg bg-transparent border-none w-full hover:bg-clrBg-2">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
