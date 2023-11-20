import SideBar from "../ui/dashboard/sidebar/sidebar.jsx";
import Navbar from "../ui/dashboard/navbar/navbar.jsx";
const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 px-8 py-8">
        <SideBar />
      </div>
      <div className="flex-4 border px-8 py-8">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
