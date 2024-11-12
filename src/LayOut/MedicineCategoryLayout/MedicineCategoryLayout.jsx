import React from "react";
import { Outlet } from "react-router-dom";

function MedicineCategoryLayout() {
  return (
    <div className="lg:w-[80%] mx-auto lg:flex justify-center">
      {/* ----------------- side bar ------------ */}
      <div className="lg:w-30% md:w-full mx-auto">
        sidebar
        <div>
          <button>home icon</button>
        </div>
        <div>
          <button>google icon prefered language</button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MedicineCategoryLayout;
