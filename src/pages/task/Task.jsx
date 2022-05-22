import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTask, taskSelector, updateField} from "../../store/features/taskSlice";
import {Button, Card, CardActions, CardContent, Skeleton, Typography} from "@mui/material";
import {StyledWrapper} from "../../components/style";
import TaskPriority from "../../components/task/TaskPriority";
import AccessDenied from "../../components/common/AccessDenied";
import TaskStatus from "../../components/task/TaskStatus";
import TaskTitle from "../../components/task/TaskTitle";
import TaskDoneIcon from '@mui/icons-material/CheckRounded';
import TaskCreatedDate from "../../components/task/TaskCreatedDate";

const statusField = 'status';

const Task = () => {
    const {id} = useParams();

    const {currentTask, error, loading} = useSelector(taskSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTask({id}));
    }, [dispatch, id])

    const handleTaskDone = () => {
        dispatch(updateField({id, fieldName: statusField, value: 'done'}))
    }

    return (
        <StyledWrapper>
            {error ?
                <AccessDenied value={"this task"}/> :
                <Card sx={{minWidth: 275, backgroundColor: '#006E7F'}}>
                    <CardContent>
                        {loading ? <Skeleton/>
                            : <>
                                <TaskTitle title={currentTask.title}/>
                                <TaskStatus status={currentTask.status}/>
                                <TaskPriority priority={currentTask.priority}/>
                                <TaskCreatedDate createdAt={currentTask.createdAt}/>
                            </>
                        }
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={handleTaskDone}>
                            <TaskDoneIcon sx={{color: '#F8CB2E'}} fontSize='large'/>
                        </Button>
                    </CardActions>
                </Card>
            }
        </StyledWrapper>
    );
};

export default Task;
