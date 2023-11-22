import Image from "next/image";
const SingleUserComponent = () => {
  return (
    <div className="flex gap-7">
      <div className="flex-1 bg-clrBgSoft rounded-lg p-4 font-bold h-max sticky top-10">
        <div className="relative w-[100%] h-60 overflow-hidden mb-3">
          <Image src="/noavatar.png" alt="User Image" fill />
        </div>
        Qurban
      </div>
      <div className="flex-3 bg-clrBgSoft rounded-lg p-4">
        <form action="" className="flex flex-col">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Qurban"
            className="userform"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="qurban@gmail.com"
            className="userform"
          />
          <label>Password</label>
          <input type="password" name="password" className="userform" />
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            placeholder="+233434364"
            className="userform"
          />
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            className="userform"
            placeholder="Shahdra Near Railway Phatak Outside Lahore"
          />
          <label>isAdmin?</label>
          <select name="isAdmin" id="isAdmin" className="userform">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
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
