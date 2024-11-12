import React from "react";
import MedicineCategorySidebar from "../../Shared/MedicineCategorySidebar/MedicineCategorySidebar";
import { Outlet } from "react-router-dom";

function MedicineCategoryLayout() {
  return (
    <div>
      {/* ----------------- side bar ------------ */}
      <div>sidebar </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MedicineCategoryLayout;
