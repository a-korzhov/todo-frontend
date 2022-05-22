import React from 'react';
import {Box} from "@mui/material";
import styled from "styled-components";
import {Link} from "react-router-dom";

const HeaderTaskLink = () => {
    return (
        <Box ml={5}>
            <StyledTaskLink to="/tasks">
                Tasks
            </StyledTaskLink>
        </Box>
    );
};

export default HeaderTaskLink;

const StyledTaskLink = styled(Link)`
  color: #F8CB2E;
  font-weight: 400;
  font-size: 22px;

  &:hover {
    color: #d0ae38;
  }
`;