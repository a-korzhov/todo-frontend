import React from 'react';
import {Typography} from "@mui/material";

const TaskStatus = ({status}) => {
    let statusColor;
    switch (status) {
        case 'todo':
            statusColor = '#beafaf';
            break;
        case 'done':
            statusColor = '#43f137';
            break;
        default:
            statusColor = '#F8CB2E';
    }
    return (
        <Typography
            sx={{
                fontSize: 18,
                color: statusColor,
                fontWeight: 'bold',
                marginRight: '300px'
            }}
            color="text.secondary"
            gutterBottom
        >
            {status}
        </Typography>
    );
};

export default TaskStatus;