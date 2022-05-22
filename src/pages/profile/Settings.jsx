import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {authSelector, authUserSelector, createNewPassword} from "../../store/features/authSlice";
import {dataToJpg} from "../../util/ImageConverter";
import {StyledYellowWrapper} from "../../components/style";
import {ImageChanger, SettingsAvatar} from "../../components/img";
import {EmailChanger, PhoneChanger, ProfilePreviewer} from "../../components/user";
import PasswordChanger from "../../components/user/update/PasswordChanger";

const Settings = () => {
    const {email, status, role, imageData} = useSelector(authUserSelector);
    const {loading} = useSelector(authSelector);

    const dispatch = useDispatch();

    const handleCreateNewPassword = () => {
        dispatch(createNewPassword({email, toast}));
    }

    return (
        <ProfilePreviewer
            email={email}
            avatar={dataToJpg(imageData)}
            role={role}
        >
            <StyledYellowWrapper>
                <SettingsAvatar
                    avatar={dataToJpg(imageData)}
                    status={status}
                />
                <ImageChanger/>
                <EmailChanger/>
                <PhoneChanger/>
                <PasswordChanger
                    onClick={handleCreateNewPassword}
                    loading={loading}
                />
            </StyledYellowWrapper>
        </ProfilePreviewer>
    );
};

export default Settings;
