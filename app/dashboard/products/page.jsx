import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProduct } from "@/app/lib/data.js";
import { deleteProduct } from "@/app/lib/action.js";
const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProduct(q, page);
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
          {products.length == 0 ? (
            <h1 className="text-orange-700">No Product Found</h1>
          ) : (
            products.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={product.img || "/noproduct.jpg"}
                      alt="product image"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>${product.price}</td>
                <td>{product.createdAt?.toString().slice(4, 16)}</td>
                <td>{product.stock}</td>
                <td>
                  <div className="flex gap-2">
                    <Link href={`/dashboard/products/${product._id}`}>
                      <button className="px-3 py-1 rounded text-clrText border-none cursor-pointer bg-[teal]">
                        View
                      </button>
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={product.id} />
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

export default ProductsPage;
