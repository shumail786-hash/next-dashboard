import Link from "next/link.js";
import Search from "../../ui/dashboard/search/search.jsx";
import Image from "next/image.js";
import Pagination from "../../ui/dashboard/pagination/pagination.jsx";
import { fetchUsers } from "@/app/lib/data.js";
import { deleteUser } from "@/app/lib/action.js";
const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

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
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.length == 0 ? (
            <h1 className="text-orange-700">No User Found</h1>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={user.img || "/noavatar.png"}
                      alt="user image"
                      width={40}
                      height={40}
                      className="rounded-full object-contain"
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td
                  className={`${
                    user.isAdmin ? "text-lime-400" : "text-red-400"
                  }`}
                >
                  {user.isAdmin ? "Admin" : "Client"}
                </td>
                <td
                  className={`${
                    user.isActive ? "text-lime-400" : "text-red-400"
                  }`}
                >
                  {user.isActive ? "Active" : "Not Active"}
                </td>
                <td>
                  <div className="flex gap-2">
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button className="px-3 py-1 rounded text-clrText border-none cursor-pointer bg-[teal]">
                        View
                      </button>
                    </Link>
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={user.id} />
                      <button className="px-3 py-1 rounded text-clrText border-none cursor-pointer bg-[red]">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
