import { addUser } from "../../../lib/action.js";
const AddUserPage = () => {
  return (
    <div className="bg-clrBgSoft px-4 py-4 rounded-lg mt-4">
      <form action={addUser} className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="username"
          name="username"
          className="form-input"
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="form-input"
          required
        />
        <input
          type="number"
          placeholder="phone"
          name="phone"
          className="form-input"
          required
        />
        <select name="isAdmin" id="isAdmin" className="form-select">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive" className="form-select">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="address"
          rows="6"
          placeholder="Address"
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

export default AddUserPage;
