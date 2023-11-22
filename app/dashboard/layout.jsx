import SideBar from "../ui/dashboard/sidebar/sidebar.jsx";
import Navbar from "../ui/dashboard/navbar/navbar.jsx";
import Footer from "../ui/dashboard/footer/footer.jsx";
const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 px-8 py-8">
        <SideBar />
      </div>
      <div className="flex-4 px-8 py-8">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
