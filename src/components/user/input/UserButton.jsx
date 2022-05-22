import React from 'react';
import {MDBBtn, MDBSpinner} from "mdb-react-ui-kit";

const UserButton = ({value, loading}) => {
    return (
        <div className="col-12">
            <MDBBtn style={{width: "100%"}} className="mt-2">
                {loading && (
                    <MDBSpinner
                        size="sm"
                        role="status"
                        tag="span"
                        className="me-2"
                    />
                )}
                {value}
            </MDBBtn>
        </div>
    );
};

export default UserButton;