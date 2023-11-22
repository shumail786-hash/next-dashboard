import moment from "moment";
const Footer = () => {
  return (
    <div className="flex items-center justify-between mt-5 text-clrTextSoft">
      <div className="font-bold">Muhammad Shumail</div>
      <div className="text-sm">
        © {moment().format("YYYY")} All right reserved{" "}
      </div>
    </div>
  );
};

export default Footer;
