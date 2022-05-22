import React from 'react';

const TasksStatistic = ({tasksCount, tasksToDoCount, tasksDoneCount}) => {
    return (
        <div>
            <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                 style={{backgroundColor: "#dac865"}}>
                <div>
                    <p className="small text-muted mb-1">Tasks</p>
                    <p className="mb-0">{tasksCount}</p>
                </div>
                <div className="px-3">
                    <p className="small text-muted mb-1">Todo</p>
                    <p className="mb-0">{tasksToDoCount}</p>
                </div>
                <div>
                    <p className="small text-muted mb-1">Done</p>
                    <p className="mb-0">{tasksDoneCount}</p>
                </div>
            </div>
        </div>
    );
};

export default TasksStatistic;