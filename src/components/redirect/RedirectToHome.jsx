import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const RedirectToHome = ({seconds}) => {
    const [count, setCount] = useState(seconds);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);

        count === 0 && navigate('/');
        return () => clearInterval(interval);

    }, [count, navigate])

    return (
        <div style={{marginTop: "100px"}}>
            <h5>You already logged in</h5>
            <h5>Redirecting you in {count} seconds</h5>
        </div>
    );
};

export default RedirectToHome;