import React from 'react';
import {MDBRadio} from "mdb-react-ui-kit";

const RoleRadio = ({role, label, roleChange}) => {
    return (
        <MDBRadio
            name='role'
            value={role}
            label={label}
            onChange={() => roleChange(`ROLE_${label}`)}
            inline
        />
    );
};

export default RoleRadio;