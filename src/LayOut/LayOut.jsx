import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const LayOut = () => {
  return (
    <div>
      <Header />
      <div className="w-[90%] md:w-[95%] xl:w-[80%]  mx-auto pt-[74px] md:pt-[68px] lg:py-4 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayOut;
