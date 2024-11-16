import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DilutionsAndPotency from "../Pages/Medicine-Category-Dilutions-and-Potencies/DilutionsAndPotency";
import MedicineCategoryLayout from "../LayOut/MedicineCategoryLayout/MedicineCategoryLayout";
import NewArrivals from "../Pages/Home/HomePageCard/NewArrivals";
import Navbar2 from "../Pages/Navbar2/Navbar2";

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
        path: "/contact",
        element: <Home />,
      },
      {
        path: "/signIn",
        element: <Home />,
      },
      {
        path: "/navbar2",
        element: <Navbar2 />,
      },

      {
        path: "/medicineCategory",
        element: <MedicineCategoryLayout />,
        children: [
          {
            path: "/medicineCategory/dilutions",
            element: <DilutionsAndPotency />,
          },
        ],
      },
    ],
  },
]);
export default Router;
