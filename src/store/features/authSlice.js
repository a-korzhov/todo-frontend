import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    activationRequest,
    createNewPasswordRequest,
    getCurrentUserRequest,
    loginRequest,
    patchUserRequest,
    signupRequest,
    updatePasswordRequest
} from "../../rest/api";
import moment from "moment/moment";
import {getErrorResponseWithValidationDetails} from "../../util/ErrorUtils";

export const login = createAsyncThunk(
    'auth/login',
    async ({loginForm, rememberMe, navigate, toast}, {rejectWithValue}) => {
        try {
            const response = await loginRequest({...loginForm, rememberMe});
            console.log("RESPONSE:", response);
            console.log(response.headers.authorization)
            localStorage.setItem("auth", response.headers.authorization);
            toast.success("Logged successfully");
            navigate('/');
            return response.data;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue({message: "Server is not available"})
            }
            return rejectWithValue(error.response.data);
        }
    }
)

export const signup = createAsyncThunk(
    'auth/signup',
    async ({signUpForm, navigate, toast}, {rejectWithValue}) => {
        try {
            const response = await signupRequest(signUpForm);
            toast.success("Activation code sent to your email");
            navigate('/login');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const activateUser = createAsyncThunk(
    'auth/activation',
    async ({token, toast}, {rejectWithValue}) => {
        try {
            const response = await activationRequest(token);
            toast.success(response.data.message);
            return response.data.data;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data);
        }
    }
)

export const getCurrentUser = createAsyncThunk(
    'auth/actualUser',
    async (data, {rejectWithValue}) => {
        try {
            const response = await getCurrentUserRequest();
            return response.data;
        } catch (error) {
            console.log(error.response.message);
        }
    }
)

export const createNewPassword = createAsyncThunk(
    'auth/newPassword',
    async ({email, toast}) => {
        try {
            const currentTime = moment();
            const requestBody = {
                email: email,
                requestTime: currentTime
            }
            const response = await createNewPasswordRequest(requestBody);
            toast.success('Email was sent to your account');
            return response.data;
        } catch (error) {
            toast.error('Email is not found in our system');
        }
    }
)

export const changePassword = createAsyncThunk(
    'auth/changePassword',
    async ({password, guid, navigate, toast}) => {
        try {
            const requestBody = {
                password: password,
                guid: guid
            }
            const response = await updatePasswordRequest(requestBody);
            toast.success(response.data.message);
            navigate('/login');
            return response.data;
        } catch (error) {
            toast.error(error.response.message);
        }
    }
)

export const updateField = createAsyncThunk(
    'auth/updateField',
    async ({id, fieldName, value}) => {
        try {
            const response = await patchUserRequest(id, fieldName, value);
            return response.data;
        } catch (error) {

        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            id: 0,
            phone: '',
            email: '',
            imageData: null,
            role: '',
            status: '',
            tasksCount: 0,
            tasksDoneCount: 0,
            tasksToDoCount: 0
        },
        error: "",
        validationErrors: [],
        loading: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLogout: (state, action) => {
            localStorage.clear();
            state.user = null;
        },
        clearError: (state, action) => {
            state.error = null;
            state.validationErrors = [];
        }
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload.details) {
                state.validationErrors = action.payload.details;
            }
            state.error = action.payload.message;
        },
        [signup.pending]: (state, action) => {
            state.loading = true;
        },
        [signup.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [signup.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload.details) {
                const parsedErrors = getErrorResponseWithValidationDetails(action.payload);
                state.error = parsedErrors.details[0].issue;
            } else {
                state.error = action.payload.message;
            }
        },
        [activateUser.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [activateUser.rejected]: (state, action) => {
            state.error = action.payload.message;
        },
        [getCurrentUser.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [getCurrentUser.rejected]: (state, action) => {
            state.error = action.payload.message;
        },
        [createNewPassword.pending]: (state, action) => {
            state.loading = true;
        },
        [createNewPassword.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [createNewPassword.rejected]: (state, action) => {
            state.loading = false;
        },
        [changePassword.pending]: (state, action) => {
            state.loading = true;
        },
        [changePassword.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.clear();
            state.user = null;
        },
        [changePassword.rejected]: (state, action) => {
            state.loading = false;
        },
        [updateField.fulfilled]: (state, action) => {
            const payload = action.payload[0];
            state.user.email = payload.email;
            state.user.phone = payload.phone;
        }
    }
})

export const {setLogout, clearError} = authSlice.actions;

export const authUserSelector = state => ({...state.auth.user});
export const authSelector = (state) => ({...state.auth});

export default authSlice.reducer;