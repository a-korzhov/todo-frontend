import React from 'react';
import {MDBInput} from "mdb-react-ui-kit";

const LongUserInput = ({label, type, value, name, onChange, validation = `${label} is missing`}) => {
    return (
        <div className="col-md-12">
            <label>{label}</label>
            <MDBInput
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                required
                validation={validation}
                contrast
            />
        </div>
    );
};

export default LongUserInput;