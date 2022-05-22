import React from 'react';
import {Link} from "react-router-dom";

const AddTaskLink = () => {
    return (
        <Link
            to="/add-task"
            style={{
                color: "#F8CB2E",
                backgroundColor: "#006E7F",
                opacity: 0.9
            }}
            className="btn btn-outline-primary me-1 flex-grow-1"
        >
            Add task
        </Link>
    );
};

export default AddTaskLink;