import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar />
      <div className="max-w-[1240px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
