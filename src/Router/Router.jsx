import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DilutionsAndPotency from "../Pages/Medicine-Category-Dilutions-and-Potencies/DilutionsAndPotency";
import MedicineCategoryLayout from "../LayOut/MedicineCategoryLayout/MedicineCategoryLayout";
import DilutionRegular from "../Pages/Medicine-Category-Dilutions-and-Potencies/Dilution-Regular/DilutionRegular";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/medicineCategory",
        element: <MedicineCategoryLayout />,
        children: [
          {
            path: "/medicineCategory/dilutions",
            element: <DilutionsAndPotency />,
          },
          {
            path: "/medicineCategory/dilReg",
            element: <DilutionRegular />,
          },
        ],
      },
    ],
  },
]);
export default Router;
