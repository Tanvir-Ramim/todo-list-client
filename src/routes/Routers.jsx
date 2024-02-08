import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import DashBoardLayout from "../layout/DashBoardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/errorPage/ErrorPage";

  const Routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <ErrorPage></ErrorPage>,
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
       element : <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
       children : [
        {
           path : "dash",
           element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        }
       ]
    }
  ]);

export default Routers;