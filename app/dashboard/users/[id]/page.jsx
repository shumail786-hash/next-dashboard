import Image from "next/image";
import { fetchUser } from "@/app/lib/data.js";
import { updateUser } from "@/app/lib/action.js";
const SingleUserComponent = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className="flex gap-7">
      <div className="flex-1 bg-clrBgSoft rounded-lg p-4 font-bold h-max sticky top-10">
        <div className="relative w-[100%] h-60 overflow-hidden mb-3">
          <Image src={user?.img || "/noavatar.png"} alt="User Image" fill />
        </div>
        {user?.username}
      </div>
      <div className="flex-3 bg-clrBgSoft rounded-lg p-4">
        <form action={updateUser} className="flex flex-col">
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            className="userform"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            className="userform"
          />
          <label>Password</label>
          <input type="password" name="password" className="userform" />
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            placeholder={user.phone}
            className="userform"
          />
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            className="userform"
            placeholder={user.address}
          />
          <label>isAdmin?</label>
          <select name="isAdmin" id="isAdmin" className="userform">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>isActive?</label>
          <select name="isActive" id="isActive" className="userform">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className="w-full bg-teal-500 text-clrText p-4">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserComponent;
