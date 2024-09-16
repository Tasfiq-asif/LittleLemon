import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
      <div>
        <Navbar />
        <div>
          <div className="min-h-[calc(100vh-306px)] w-full">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Root;