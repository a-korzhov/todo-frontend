import React from 'react';
import {MDBCardFooter} from "mdb-react-ui-kit";
import UserFormLink from "./UserFormLink";

const LoginFormFooter = () => {
    return (
        <MDBCardFooter>
            <UserFormLink
                to="/signup"
                value="Don't have an account ? Sign Up"
            />
            <UserFormLink
                to="/forgot-password"
                value="Forgot password ? Reset it"
            />
        </MDBCardFooter>
    );
};

export default LoginFormFooter;