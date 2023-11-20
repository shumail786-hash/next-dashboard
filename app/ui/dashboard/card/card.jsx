import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex gap-5 px-1 py-6 rounded-lg cursor-pointer bg-clrBgSoft w-full">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-4">
        <span>Total Users</span>
        <span className="text-base font-medium">10.273</span>
        <span className="text-xs">
          {" "}
          <span className="text-positiveClr">12%</span>more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
