import React from 'react';
import RedirectToLogin from "../redirect/RedirectToLogin";

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem('auth');
    return token ? children : <RedirectToLogin seconds={1}/>;
};

export default PrivateRoute;