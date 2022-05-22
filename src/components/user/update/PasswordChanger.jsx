import React from 'react';
import {MDBSpinner} from "mdb-react-ui-kit";
import {Button} from "@mui/material";

const PasswordChanger = ({onClick, loading}) => {
    return (
        <Button
            style={{
                color: '#fdd835',
                backgroundColor: '#006E7F'
            }}
            variant="contained"
            onClick={onClick}
        > {loading && <MDBSpinner
            size="sm"
            role="status"
            tag="span"
            className="me-2"
        />}
            Change password
        </Button>
    );
};

export default PasswordChanger;