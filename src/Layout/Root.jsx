import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
