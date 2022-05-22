import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authUserSelector, updateField} from "../../../store/features/authSlice";
import DataChanger from "./DataChanger";

const phoneField = 'phone';

const PhoneChanger = () => {
    const {id, phone} = useSelector(authUserSelector);

    const [phoneValue, setPhoneValue] = useState('');

    const dispatch = useDispatch();

    const handleUpdatePhone = () => {
        dispatch(updateField({id, fieldName: phoneField, value: phoneValue}))
    }

    return (
        <DataChanger
            current={phoneValue}
            previous={phone}
            type='email'
            name={phoneField}
            isDisabled={false}
            handleInput={(e) => setPhoneValue(e.target.value)}
            handleUpdate={handleUpdatePhone}
        />
    );
};

export default PhoneChanger;