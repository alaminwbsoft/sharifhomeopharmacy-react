import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DilutionsAndPotency from "../Pages/Medicine-Category-Dilutions-and-Potencies/DilutionsAndPotency";

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
        path: "/dilutions",
        element: <DilutionsAndPotency />,
      },
    ],
  },
]);
export default Router;
