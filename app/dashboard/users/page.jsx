import Link from "next/link.js";
import Search from "../../ui/dashboard/search/search.jsx";
import Image from "next/image.js";
import Pagination from "../../ui/dashboard/pagination/pagination.jsx";
const UsersPage = () => {
  return (
    <div className="bg-clrBgSoft px-4 py-4 rounded-md mt-4">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a User" />
        <Link href="/dashboard/users/add">
          <button className="text-xs px-5 py-2 bg-[#5d57c9] text-clrText border-none cursor-pointer rounded-lg">
            Add User
          </button>
        </Link>
      </div>
      <table className="w-full t-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex gap-2 items-center">
                <Image
                  src="/noavatar.png"
                  alt="user image"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                Qurban Awan
              </div>
            </td>
            <td>qurbanawan@gmail.com</td>
            <td>13 01 2022</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className="flex gap-2">
                <Link href="/dashboard/users/test">
                  <button className="px-3 py-1 rounded text-clrText border-none cursor-pointer bg-[teal]">
                    View
                  </button>
                </Link>
                <button className="px-3 py-1 rounded text-clrText border-none cursor-pointer bg-[red]">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
