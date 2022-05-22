import React from 'react';
import UserFormLink from "./UserFormLink";
import {MDBCardFooter} from "mdb-react-ui-kit";

const SignUpFormFooter = () => {
    return (
        <MDBCardFooter>
            <UserFormLink
                to="/login"
                value="Already have an account ? Login"
            />
        </MDBCardFooter>
    );
};

export default SignUpFormFooter;