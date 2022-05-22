import React, {useState} from 'react';
import {ProfileItem} from "../user";
import {StyledPreviewButton} from "../style";

const ProfilePreviewer = ({email, avatar, role, children}) => {
    const [preview, setPreview] = useState(false);

    const [timeoutId, setTimeoutId] = useState(0);

    const handlePreview = () => {
        setPreview(true);
        setTimeoutId(setTimeout(() => {
            setPreview(false);
        }, 5000));
    }

    const hidePreview = () => {
        setPreview(false);
        clearTimeout(timeoutId);
    }

    return (
        <div>
            {preview ?
                <div onClick={hidePreview}>
                    <ProfileItem
                        email={email}
                        avatar={avatar}
                        role={role}
                        showButtons={false}
                    />
                </div>
                : children
            }
            <StyledPreviewButton onClick={handlePreview}>
                Preview profile
            </StyledPreviewButton>
        </div>
    );
};

export default ProfilePreviewer;