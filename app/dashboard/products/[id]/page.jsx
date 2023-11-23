import Image from "next/image";
import { fetchProduct } from "../../../lib/data.js";
import { updateProduct } from "../../../lib/action.js";
const SingleProduct = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className="flex gap-7">
      <div className="flex-1 bg-clrBgSoft rounded-lg p-4 font-bold h-max sticky top-10">
        <div className="relative w-[100%] h-60 overflow-hidden mb-3">
          <Image src={product?.img || "/noproduct.jpg"} alt="User Image" fill />
        </div>
        {product?.title}
      </div>
      <div className="flex-3 bg-clrBgSoft rounded-lg p-4">
        <form action={updateProduct} className="flex flex-col">
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder={product.title}
            className="userform"
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder={product.price}
            className="userform"
          />
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            className="userform"
            placeholder={product.stock}
          />

          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color}
            className="userform"
          />
          <label>Size</label>
          <input
            type="text"
            name="size"
            placeholder={product.size}
            className="userform"
          />
          <label>Cat</label>
          <select
            name="cat"
            id="cat"
            className="userform"
            defaultValue={product?.cat}
          >
            <option defaultValue={product?.cat === "Kitchen"}>Kitchen</option>
            <option defaultValue={product?.cat === "Phone"}>Phone</option>
            <option defaultValue={product?.cat === "Computers"}>
              Computers
            </option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="description"
            rows="6"
            placeholder={product.desc}
            className="userform"
          />
          <button className="w-full bg-teal-500 text-clrText p-4">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
