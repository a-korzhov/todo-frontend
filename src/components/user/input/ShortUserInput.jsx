import React from 'react';
import {MDBInput} from "mdb-react-ui-kit";

const ShortUserInput = ({label, type, value, name, onChange, validation = `${label} is missing`}) => {
    return (
        <div className="col-md-6">
            <label>{label}</label>
            <MDBInput
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                required
                invalid
                validation={validation}
                contrast
            />
        </div>
    );
};

export default ShortUserInput;