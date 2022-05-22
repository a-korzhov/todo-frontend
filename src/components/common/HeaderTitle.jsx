import React from 'react';
import {MDBNavbarBrand} from "mdb-react-ui-kit";
import styled from "styled-components";

const HeaderTitle = () => {
    return (
        <MDBNavbarBrand>
            <StyledHeader>
                Todo App
            </StyledHeader>
        </MDBNavbarBrand>
    );
};

export default HeaderTitle;

const StyledHeader = styled.h2`
  color: #F8CB2E;
  font-weight: 600;
  font-size: 22px;

  &:hover {
    color: #d0ae38;
  }
`;