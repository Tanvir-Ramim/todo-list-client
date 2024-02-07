import {useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const lo = useLocation()
    if(loading){
        return <div>Loading ..</div>
    }
    if(user && !loading){
        return children
   }
    return <Navigate to="/login" state={{from: lo}} replace></Navigate>
};

PrivateRoute.propTypes ={
    children : PropTypes.node
}

export default PrivateRoute;