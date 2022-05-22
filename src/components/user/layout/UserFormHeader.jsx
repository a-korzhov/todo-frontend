import React from 'react';
import {MDBIcon} from "mdb-react-ui-kit";

const UserFormHeader = ({value}) => {
    return (
        <>
            <MDBIcon fas icon="user-circle" className="fa-2x"/>
            <h5>{value}</h5>
        </>
    );
};

export default UserFormHeader;