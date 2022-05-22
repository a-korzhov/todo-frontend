import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBInput, MDBSpinner, MDBValidation} from "mdb-react-ui-kit";
import {toast} from "react-toastify";
import {authSelector, changePassword, setLogout} from "../../store/features/authSlice";
import {changePasswordInitState} from "../../util/initStates";
import {StyledWrapper} from "../../components/style";

const ChangePassword = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {token} = Object.fromEntries([...searchParams]);
    const navigate = useNavigate();

    const {loading} = useSelector(authSelector);
    const [passwordForm, setPasswordForm] = useState(changePasswordInitState);
    const {password, confirmPassword} = passwordForm;

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            toast.error('Passwords are not match');
        }
        if (password && confirmPassword) {
            const guid = token;
            dispatch(changePassword({password, guid, navigate, toast}));
        }
    }

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setPasswordForm({...passwordForm, [name]: value});
    };


    return (
        <StyledWrapper>
            <MDBCard alignment="center" style={{color: '#d7c082', backgroundColor: '#006E7F'}}>
                <MDBIcon fas icon="user-circle" className="fa-2x"/>
                <h5>Change password</h5>
                <MDBCardBody>
                    <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
                        <div className="col-md-12">
                            <label>Enter new password</label>
                            <MDBInput
                                type="password"
                                value={password}
                                name="password"
                                onChange={handleInputChange}
                                required
                                invalid
                                validation="Password is missing"
                            />
                        </div>
                        <div className="col-md-12">
                            <label>Confirm password</label>
                            <MDBInput
                                type="password"
                                value={confirmPassword}
                                name="confirmPassword"
                                onChange={handleInputChange}
                                required
                                invalid
                                validation="Password is missing"
                            />
                        </div>
                        <div className="col-12">
                            <MDBBtn style={{width: "100%"}} className="mt-2">
                                {loading && (
                                    <MDBSpinner
                                        size="sm"
                                        role="status"
                                        tag="span"
                                        className="me-2"
                                    />
                                )}
                                Change password
                            </MDBBtn>
                        </div>
                    </MDBValidation>
                </MDBCardBody>
            </MDBCard>
        </StyledWrapper>
    );
};


export default ChangePassword;
