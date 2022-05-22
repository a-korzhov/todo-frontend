import React from 'react';
import {Typography} from "@mui/material";

const TaskPriority = ({priority}) => {
    let color;
    let opacity;
    let fontWeight;
    switch (priority) {
        case 'critical':
            color = '#b42525';
            opacity = '1';
            fontWeight = 'bolder';
            break;
        case 'major':
            color = 'orange';
            opacity = '1';
            fontWeight = 'normal';
            break;
        case 'minor':
            color = 'green';
            opacity = '1';
            fontWeight = 'normal';
            break;
        default:
            color = '#fff';
            opacity = '0.5';
            fontWeight = 'normal';
    }

    return (
        <Typography sx={{
            mb: 1.5,
            color: color,
            fontWeight: fontWeight,
            opacity: opacity,
            marginRight: '300px'
        }}
        >
            {priority}
        </Typography>
    );
};

export default TaskPriority;