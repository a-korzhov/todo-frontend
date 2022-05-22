import React from 'react';
import {StyledParagraph} from "../../style";
import {Link} from "react-router-dom";

const UserFormLink = ({to, value}) => {
    return (
        <Link to={to}>
            <StyledParagraph>{value}</StyledParagraph>
        </Link>
    );
};

export default UserFormLink;