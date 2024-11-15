import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DilutionsAndPotency from "../Pages/Medicine-Category-Dilutions-and-Potencies/DilutionsAndPotency";
import MedicineCategoryLayout from "../LayOut/MedicineCategoryLayout/MedicineCategoryLayout";
import NewArrivals from "../Pages/Home/HomePageCard/NewArrivals";

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

      //new arrival route
      {
        path: "/",
        element: <NewArrivals />,
        children: [
          {
            path: "/new-arrival",
            element: <NewArrivals />,
          },
          {
            path: "/popular",
            element: <NewArrivals />,
          },
        ],
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
