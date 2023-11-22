import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";
const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="relative bg-gradient-to-t from bg-bgGradient-1 to-bgGradient-2 py-5 rounded-lg">
        <div className="flex gap-4 flex-col px-1">
          <span className="font-bold">Available Now</span>
          <h3 className="font-medium text-sm text-clrTextSoft">
            How to use Admin Dashboard
          </h3>
          <span className="text-sm">Take 4 minutes to learn </span>
          <p className="text-[13px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            repudiandae amet, deleniti accusamus impedit hic eligendi.
          </p>
          <button className="px-3 py-2 flex items-center gap-1 bg-[#5d57c9] text-white border-none rounded cursor-pointer w-max">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
