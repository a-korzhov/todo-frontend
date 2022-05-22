import React from 'react';
import {MDBInputGroup} from "mdb-react-ui-kit";
import {Box} from "@mui/material";
import {StyledChangeFieldButton} from "../../style";

const DataChanger = ({current, previous, type, name, handleInput, handleUpdate, isDisabled}) => {
    return (
        <Box p={1}>
            <MDBInputGroup className='mb-3'>
                <input
                    type={type}
                    className='form-control'
                    value={current ? current : previous}
                    name={name}
                    disabled={isDisabled}
                    onChange={handleInput}
                />
                <StyledChangeFieldButton
                    onClick={handleUpdate}
                    outline>
                    Change {name}
                </StyledChangeFieldButton>
            </MDBInputGroup>
        </Box>
    );
};

export default DataChanger;