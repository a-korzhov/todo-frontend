import React, {useEffect} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import {activateUser} from "../../store/features/authSlice";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import RedirectToLogin from "../../components/redirect/RedirectToLogin";

const Activation = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {token} = Object.fromEntries([...searchParams]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(activateUser({token, toast}));
    })

    return (
        <div>
            <RedirectToLogin seconds={5}/>
            <p><Link to="/login">Visit login page</Link></p>
        </div>
    );
};

export default Activation;
