import React from 'react';
import {useSelector} from "react-redux";
import {authUserSelector} from "../../store/features/authSlice";
import {ProfileItem} from "../../components/user";
import {dataToJpg} from "../../util/ImageConverter";

const Profile = () => {
    const {email, imageData, role, tasksCount, tasksDoneCount, tasksToDoCount} = useSelector(authUserSelector);

    return (
        <ProfileItem
            email={email}
            avatar={dataToJpg(imageData)}
            role={role}
            tasksCount={tasksCount}
            tasksToDoCount={tasksToDoCount}
            tasksDoneCount={tasksDoneCount}
        />
    );
};

export default Profile;
