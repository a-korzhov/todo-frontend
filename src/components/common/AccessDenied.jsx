import React from 'react';

const AccessDenied = ({value}) => {
    return (
        <div>
            <h2>Access denied</h2>
            <h3>Your have no access to {value}</h3>
        </div>
    );
};

export default AccessDenied;