import React from 'react';
import {UserStatusIcon} from "../img";

const SettingsAvatar = ({avatar, status}) => {
    return (
        <div className="col-md-4 p-2" style={{display: "inline-flex"}}>
            <img
                src={avatar}
                className="img-fluid rounded-circle"
                alt="Avatar"
                style={{clipPath: "circle()"}}
            />
            <UserStatusIcon status={status}/>
        </div>
    );
};

export default SettingsAvatar;