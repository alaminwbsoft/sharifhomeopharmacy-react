import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const LayOut = () => {
  return (
    <div className="bg-slate-50">
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    </div>
  );
};

export default LayOut;
