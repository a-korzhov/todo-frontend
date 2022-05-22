import React from 'react';
import {Link} from "react-router-dom";

const ManageTaskLink = () => {
    return (
        <Link
            to="/tasks"
            style={{color: "#F8CB2E", backgroundColor: "#006E7F"}}
            className="btn btn-outline-primary me-1 flex-grow-1"
        >
            Manage tasks
        </Link>
    );
};

export default ManageTaskLink;