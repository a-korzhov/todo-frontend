import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBInput, MDBSpinner, MDBValidation} from "mdb-react-ui-kit";
import {authSelector, createNewPassword} from "../../store/features/authSlice";
import {toast} from "react-toastify";
import {StyledWrapper} from "../../components/style";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const {loading} = useSelector(authSelector);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (email) {
            dispatch(createNewPassword({email, toast}));
        }
    }

    const handleInputChange = (e) => {
        let {value} = e.target;
        setEmail(value);
    };

    return (
        <StyledWrapper>
            <MDBCard alignment="center" style={{color: '#d7c082', backgroundColor: '#006E7F'}}>
                <MDBIcon fas icon="user-circle" className="fa-2x"/>
                <h5>Forgot password</h5>
                <MDBCardBody>
                    <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
                        <div className="col-md-12">
                            <label>Enter your email address</label>
                            <MDBInput
                                type="email"
                                value={email}
                                name="email"
                                onChange={handleInputChange}
                                required
                                invalid
                                validation="Email is missing"
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
                                Reset password
                            </MDBBtn>
                        </div>
                    </MDBValidation>
                </MDBCardBody>
            </MDBCard>
        </StyledWrapper>
    );
};

export default ForgotPassword;
