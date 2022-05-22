import React from 'react';
import {MDBCheckbox} from "mdb-react-ui-kit";

const UserCheckBox = ({label, name, checked, onChange}) => {
    return (
        <div className="col-md-12">
            <label>{label}</label>
            <MDBCheckbox
                name={name}
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
};

export default UserCheckBox;