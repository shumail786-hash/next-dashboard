import Image from "next/image";
const SingleProduct = () => {
  return (
    <div className="flex gap-7">
      <div className="flex-1 bg-clrBgSoft rounded-lg p-4 font-bold h-max sticky top-10">
        <div className="relative w-[100%] h-60 overflow-hidden mb-3">
          <Image src="/noproduct.jpg" alt="User Image" fill />
        </div>
        Qurban
      </div>
      <div className="flex-3 bg-clrBgSoft rounded-lg p-4">
        <form action="" className="flex flex-col">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Qurban"
            className="userform"
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="255"
            className="userform"
          />
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            className="userform"
            placeholder="23"
          />

          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder="red"
            className="userform"
          />
          <label>Size</label>
          <input
            type="text"
            name="size"
            placeholder="Pak"
            className="userform"
          />
          <label>Category</label>
          <select name="cat" id="cat" className="userform">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            rows="6"
            placeholder="description"
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
