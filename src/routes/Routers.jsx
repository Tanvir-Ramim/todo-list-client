import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

  const Routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children :[
        {
             index : true,
             element : <Home></Home>
        },
        {
           path :  'login',
           element : <Login></Login>
        }
      ]
    },
  ]);

export default Routers;