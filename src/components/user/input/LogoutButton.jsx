import React from 'react';
import {MDBBtn} from "mdb-react-ui-kit";
import {setLogout} from "../../../store/features/authSlice";
import {useDispatch} from "react-redux";

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setLogout());
    };

    return (
        <MDBBtn href="/login" style={{color: "#F8CB2E", backgroundColor: "#006E7F"}}>
            <span onClick={() => handleLogout()}>Logout</span>
        </MDBBtn>
    );
};

export default LogoutButton;