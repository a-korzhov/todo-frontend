import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import TaskReducer from "./features/taskSlice";

export default configureStore({
    reducer: {
        auth: AuthReducer,
        task: TaskReducer,
    }
})