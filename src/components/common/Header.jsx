import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MDBContainer, MDBDropdown, MDBNavbar} from "mdb-react-ui-kit";
import jwtDecode from "jwt-decode";
import {authUserSelector, getCurrentUser, setLogout} from "../../store/features/authSlice";
import {Menu} from "../index";
import {LogoutButton} from "../user";
import UserAvatar from "../image/UserAvatar";
import HeaderTitle from "./HeaderTitle";
import HeaderTaskLink from "./HeaderTaskLink";
import AddTaskLink from "../user/input/AddTaskLink";
import {Box} from "@mui/material";

const Header = () => {
    const {id, email, status, imageData} = useSelector(authUserSelector);
    const dispatch = useDispatch();
    const token = localStorage.getItem('auth');

    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                dispatch(setLogout());
            }
            dispatch(getCurrentUser())
        }
    }, [dispatch, token])

    return (
        <MDBNavbar fixed="top" expand="lg" style={{backgroundColor: "#006E7F"}}>
            <MDBContainer>
                <HeaderTitle/>
                {id ? (
                    <>
                        <HeaderTaskLink/>
                        <Box ml={3}>
                            <AddTaskLink/>
                        </Box>
                        <UserAvatar
                            status={status}
                            email={email}
                            imageData={imageData}
                        />
                        <MDBDropdown className='btn-group'>
                            <LogoutButton/>
                            <Menu/>
                        </MDBDropdown>
                    </>) : null}
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Header;