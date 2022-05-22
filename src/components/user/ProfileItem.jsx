import React from 'react';
import AddTaskLink from "./input/AddTaskLink";
import ManageTaskLink from "./input/ManageTaskLink";
import TasksStatistic from "./layout/TasksStatistic";

const ProfileItem = ({email, avatar, role, tasksCount, tasksDoneCount, tasksToDoCount}) => {
    return (
        <section className="vh-100" style={{backgroundColor: "#fdd835"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-md-9 col-lg-7 col-xl-5">
                        <div className="card" style={{borderRadius: "15px"}}>
                            <div className="card-body p-4" style={{backgroundColor: "#ecd75e"}}>
                                <div className="d-flex text-black">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={avatar}
                                            alt={email} className="img-fluid"
                                            style={{width: "180px", borderRadius: "15px"}}/>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="mb-1">{email}</h5>
                                        <p className="mb-2 pb-1" style={{color: "#2b2a2a"}}>
                                            {role.substring(5)}
                                        </p>
                                        <TasksStatistic
                                            tasksCount={tasksCount}
                                            tasksDoneCount={tasksDoneCount}
                                            tasksToDoCount={tasksToDoCount}
                                        />
                                        <div className="d-flex pt-1">
                                            <AddTaskLink/>
                                            <ManageTaskLink/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileItem;