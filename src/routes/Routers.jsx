import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

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
        },
        {
           path : 'register',
           element : <Register></Register>
        }
      ]
    },
  ]);

export default Routers;