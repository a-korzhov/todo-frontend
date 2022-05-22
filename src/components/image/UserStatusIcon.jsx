import React from 'react';

const UserStatusIcon = ({status}) => {
    switch (status.toLowerCase()) {
        case 'active':
            return <span className="material-symbols-outlined" title={status}>new_releases</span>
        case 'inactive':
            return <span className="material-symbols-outlined" title={status}>warning</span>
        case 'blocked':
            return <span className="material-symbols-outlined" title={status}>error</span>
        default:
            return <span>TBD</span>
    }
};

export default UserStatusIcon;