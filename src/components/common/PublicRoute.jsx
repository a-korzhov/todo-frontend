import React from 'react';
import RedirectToHome from "../redirect/RedirectToHome";

const PublicRoute = ({children}) => {
    const token = localStorage.getItem('auth');
    return !token ? children : <RedirectToHome seconds={3}/>;
};

export default PublicRoute;