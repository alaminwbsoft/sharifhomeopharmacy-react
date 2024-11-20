import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const LayOut = () => {
  return (
    <div>
      <div className=" max-w-full mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default LayOut;
