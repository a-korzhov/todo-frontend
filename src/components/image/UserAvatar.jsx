import React from 'react';
import {createTheme} from "@mui/material/styles";
import {Avatar} from "@mui/material";
import {dataToJpg} from "../../util/ImageConverter";
import {StyledActiveBadge, StyledInactiveBadge} from "../style";

const UserAvatar = ({status, email, imageData}) => {
    console.log(status);
    return (
        <>
            {status === 'ACTIVE' ?
                <StyledActiveBadge
                    overlap="circular"
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    variant="dot"
                    theme={createTheme()}
                >
                    <Avatar
                        src={dataToJpg(imageData)}
                        alt={email}
                        title={email}
                    ></Avatar>
                </StyledActiveBadge>
                :
                <StyledInactiveBadge
                    overlap="circular"
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    variant="dot"
                    theme={createTheme()}
                >
                    <Avatar
                        src={dataToJpg(imageData)}
                        alt={email}
                        title={email}
                    ></Avatar>
                </StyledInactiveBadge>
            }
        </>
    );
};

export default UserAvatar;