import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authUserSelector, updateField} from "../../../store/features/authSlice";
import DataChanger from "./DataChanger";

const emailField = 'email';

const EmailChanger = () => {
    const {id, email} = useSelector(authUserSelector);

    const [emailValue, setEmailValue] = useState('');

    const dispatch = useDispatch();

    const handleUpdateEmail = () => {
        dispatch(updateField({id, fieldName: emailField, value: emailValue}))
    }

    return (
        <DataChanger
            current={emailValue}
            previous={email}
            type='email'
            name={emailField}
            isDisabled={true}
            handleInput={(e) => setEmailValue(e.target.value)}
            handleUpdate={handleUpdateEmail}
        />
    );
};

export default EmailChanger;