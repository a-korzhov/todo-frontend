import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {MDBCard, MDBCardBody, MDBValidation} from "mdb-react-ui-kit";
import {toast} from "react-toastify";
import {authSelector, clearError, signup} from "../../store/features/authSlice";
import {handleInputChangeStrategy} from "../../util/ComponentUtils";
import {signUpFormInitState} from "../../util/initStates";
import {StyledWrapper} from "../../components/style";
import {LongUserInput, RoleRadio, ShortUserInput, SignUpFormFooter, UserButton, UserFormHeader} from "../../components/user";

const SignUp = () => {
    const [signUpForm, setSignUpForm] = useState(signUpFormInitState);
    const [confirmPassword, setConfirmPassword] = useState('');
    const {phone, email, password, role} = signUpForm;

    const {loading, error} = useSelector(authSelector);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return toast.error("Password should match");
        }
        if (email && password && phone && confirmPassword && role) {
            dispatch(signup({signUpForm, navigate, toast}));
        }
        dispatch(clearError())
    };

    const handleChangeSignUpForm = (event) => handleInputChangeStrategy(event, signUpForm, setSignUpForm);

    const handleRoleChange = (role) => setSignUpForm({...signUpForm, role});

    const handleInputConfirmPassword = (event) => setConfirmPassword(event.target.value);

    return (
        <StyledWrapper>
            <MDBCard alignment="center" style={{color: '#d7c082', backgroundColor: '#006E7F'}}>
                <UserFormHeader value="Sign Up"/>
                <MDBCardBody>
                    <MDBValidation onSubmit={handleSubmit} noValidate className="row g-1">
                        <ShortUserInput
                            type={"text"}
                            value={phone}
                            name={"phone"}
                            onChange={handleChangeSignUpForm}
                            label={"Phone"}
                        />
                        <ShortUserInput
                            type={"text"}
                            value={email}
                            name={"email"}
                            onChange={handleChangeSignUpForm}
                            label={"Email"}
                        />
                        <LongUserInput
                            type={"password"}
                            value={password}
                            name={"password"}
                            onChange={handleChangeSignUpForm}
                            label={"Password"}
                        />
                        <LongUserInput
                            type={"password"}
                            value={confirmPassword}
                            name={"confirmPassword"}
                            onChange={handleInputConfirmPassword}
                            label={"Password Confirm"}
                        />
                        <div className="col-md-12">
                            <RoleRadio role={role} label={'USER'} roleChange={handleRoleChange}/>
                            <RoleRadio role={role} label={'ADMIN'} roleChange={handleRoleChange}/>
                        </div>
                        <UserButton
                            value={"Sign Up"}
                            loading={loading}
                        />
                    </MDBValidation>
                </MDBCardBody>
                <SignUpFormFooter/>
            </MDBCard>
        </StyledWrapper>
    );
};

export default SignUp;
