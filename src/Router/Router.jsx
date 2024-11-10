import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut/>,
        errorElement:<ErrorPage/>,
        children: [
          {
            path: "/",
            element: <Home/>
          }
        ],
    }
])
export default Router;