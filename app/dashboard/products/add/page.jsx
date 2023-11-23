import { addProduct } from "@/app/lib/action.js";
const AddProductPage = () => {
  return (
    <div className="bg-clrBgSoft px-4 py-4 rounded-lg mt-4">
      <form action={addProduct} className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="title"
          name="title"
          className="form-input"
          required
        />
        <select className="form-select" name="cat">
          <option value={"General"}>Choose a Category</option>
          <option value={"Kitchen"}>Kitchen</option>
          <option value={"Phone"}>Phone</option>
          <option value={"Computer"}>Computer</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          className="form-input"
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          className="form-input"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="form-input"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className="form-input"
        />
        <textarea
          name="desc"
          id="desc"
          rows="6"
          placeholder="Description"
          className="form-textarea w-full"
        ></textarea>
        <button
          type="submit"
          className="w-full p-[20px] bg-teal-700 text-clrText border-none rounded cursor-pointer "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
