import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {deleteTask, getTasks, removeTask, taskSelector} from "../../store/features/taskSlice";
import {Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {Delete as DeleteIcon, Work as WorkIcon} from '@mui/icons-material';
import {toast} from "react-toastify";
import {StyledWrapper} from "../../components/style";

const TaskList = () => {
    const {tasks} = useSelector(taskSelector);

    const dispatch = useDispatch();

    console.log("TASKS", tasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    const handleDeleteTask = (id) => {
        dispatch(deleteTask({id, toast}));
        dispatch(removeTask(id));
    }

    return (
        <StyledWrapper>
            <List sx={{width: '100%', maxWidth: 400}}>
                {tasks.map((task, idx) => {
                    return <Box p={1} key={idx}>
                        <ListItem
                            style={{backgroundColor: "#006E7F", borderRadius: '30px'}}
                            className='d-flex justify-content-between align-items-center'
                        >
                            <ListItemAvatar color="primary">
                                <Avatar>
                                    <WorkIcon color="error" sx={{color: '#006E7F'}}/>
                                </Avatar>
                            </ListItemAvatar>
                            <Link to={"/tasks/" + task.id}>
                                <ListItemText
                                    primary={task.title}
                                    secondary={new Date(task.createdAt * 1000).toDateString()}
                                    sx={{color: "#F8CB2E"}}/>
                            </Link>
                            <IconButton
                                onClick={() => handleDeleteTask(task.id)}
                                edge="end"
                                aria-label="delete"
                                sx={{
                                    color: '#F8CB2E',
                                    backgroundColor: '#bd8c80'
                                }}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </ListItem>
                    </Box>
                })}
            </List>
        </StyledWrapper>
    );
};


export default TaskList;
