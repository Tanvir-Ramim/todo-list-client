import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import DashBoardLayout from "../layout/DashBoardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

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
    {
       path : "/dashboard",
       element : <DashBoardLayout></DashBoardLayout>,
       children : [
        {
           path : "dash",
           element : <Dashboard></Dashboard>
        }
       ]
    }
  ]);

export default Routers;