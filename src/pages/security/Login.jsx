import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {MDBCard, MDBCardBody, MDBValidation} from "mdb-react-ui-kit";
import {useDispatch, useSelector} from "react-redux";
import {LoginFormFooter, LongUserInput, UserButton, UserCheckBox, UserFormHeader} from "../../components/user";
import {toast} from "react-toastify";
import {authSelector, login} from "../../store/features/authSlice";
import {handleInputChangeStrategy} from "../../util/ComponentUtils";
import {loginFormInitState} from "../../util/initStates";
import {StyledWrapper} from "../../components/style";

const Login = () => {
    const [loginForm, setLoginForm] = useState(loginFormInitState);
    const [rememberMe, setRememberMe] = useState(false);

    const {loading, error, validationErrors} = useSelector(authSelector);
    const {email, password} = loginForm;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (validationErrors.length > 0) {
            for (let vd of validationErrors) {
                toast.error(vd.issue);
            }
        } else {
            error && toast.error(error);
        }
    }, [error, validationErrors]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email && password) {
            dispatch(login({loginForm, rememberMe, navigate, toast}));
        }
    }

    const handleInputChange = (event) => handleInputChangeStrategy(event, loginForm, setLoginForm);
    const handleRememberMe = e => setRememberMe(e.target.checked);
    return (
        <StyledWrapper>
            <MDBCard alignment="center" style={{color: '#d7c082', backgroundColor: '#006E7F'}}>
                <UserFormHeader value="Login"/>
                <MDBCardBody>
                    <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
                        <LongUserInput
                            type={"email"}
                            value={email}
                            name={"email"}
                            onChange={handleInputChange}
                            label={"Email"}
                        />
                        <LongUserInput
                            type={"password"}
                            value={password}
                            name={"password"}
                            onChange={handleInputChange}
                            label={"Password"}
                        />
                        <UserCheckBox
                            label={"Remember me"}
                            name={"rememberMe"}
                            checked={rememberMe}
                            onChange={handleRememberMe}
                        />
                        <UserButton
                            value={"Login"}
                            loading={loading}
                        />
                    </MDBValidation>
                </MDBCardBody>
                <LoginFormFooter/>
            </MDBCard>
        </StyledWrapper>
    );
};

export default Login;