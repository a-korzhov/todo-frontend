import styled from "styled-components";
import {Badge} from "@mui/material";

const StyledActiveBadge = styled(Badge)(({theme}) => ({
    marginLeft: '650px',

    '& .MuiBadge-badge': {
        backgroundColor: '#c00808',
        color: '#c00808',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,

        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default StyledActiveBadge;