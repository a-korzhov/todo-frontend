import React from 'react';
import {Box} from "@mui/material";
import {MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle} from "mdb-react-ui-kit";
import {StyledDropdownLink} from "../style";

const Menu = () => {
    return (
        <>
            <MDBDropdownToggle
                split
                style={{backgroundColor: "#006E7F"}}
            >
            </MDBDropdownToggle>
            <MDBDropdownMenu style={{backgroundColor: "#006E7F"}}>
                <Box p={1}>
                    <MDBDropdownItem>
                        <StyledDropdownLink to="/profile">Profile</StyledDropdownLink>
                    </MDBDropdownItem>
                </Box>
                <Box p={1}>
                    <MDBDropdownItem>
                        <StyledDropdownLink to="/settings">Settings</StyledDropdownLink>
                    </MDBDropdownItem>
                </Box>
            </MDBDropdownMenu>
        </>
    );
};

export default Menu;