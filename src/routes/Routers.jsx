import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/home/Home";

  const Routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children :[
        {
             index : true,
             element : <Home></Home>
        }
      ]
    },
  ]);

export default Routers;