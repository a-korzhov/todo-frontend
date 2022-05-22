import React from 'react';
import {Typography} from "@mui/material";

const TaskCreatedDate = ({createdAt}) => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
        >
            {new Date(createdAt * 1000).toLocaleDateString()}
        </Typography>
    );
};

export default TaskCreatedDate;