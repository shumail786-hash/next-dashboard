import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const ProductsPage = () => {
  return (
    <div className="bg-clrBgSoft px-4 py-4 rounded-md mt-4">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a Product" />
        <Link href="/dashboard/products/add">
          <button className="text-xs px-5 py-2 bg-[#5d57c9] text-clrText border-none cursor-pointer rounded-lg">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full t-table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex gap-2 items-center">
                <Image
                  src="/noproduct.jpg"
                  alt="user image"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                Iphone
              </div>
            </td>
            <td>Desc</td>
            <td>$999</td>
            <td>12.11.2023</td>
            <td>20</td>
            <td>
              <div className="flex gap-2">
                <Link href="/dashboard/products/test">
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

export default ProductsPage;
