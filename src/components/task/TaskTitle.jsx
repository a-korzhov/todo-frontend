import React from 'react';
import {Typography} from "@mui/material";

const TaskTitle = ({title}) => {
    return (
        <Typography variant="h5" component="div" sx={{color: '#F8CB2E'}}>
            {title}
        </Typography>
    );
};

export default TaskTitle;