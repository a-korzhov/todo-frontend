import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    createTaskRequest,
    deleteTaskRequest,
    getTaskByIdRequest,
    getTasksRequest,
    patchTaskRequest
} from "../../rest/api";
import {getErrorResponseWithValidationDetails} from "../../util/ErrorUtils";

export const addTask = createAsyncThunk(
    'task/add',
    async ({taskForm, toast}, {rejectWithValue}) => {
        try {
            const response = await createTaskRequest(taskForm);
            toast.success('Task created successfully');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const getTasks = createAsyncThunk(
    'task/add',
    async (data, {rejectWithValue}) => {
        try {
            const response = await getTasksRequest();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const getTask = createAsyncThunk(
    'task/get',
    async ({id}, {rejectWithValue}) => {
        try {
            const response = await getTaskByIdRequest(id);
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
)

export const deleteTask = createAsyncThunk(
    'task/delete',
    async ({id, toast}, {rejectWithValue}) => {
        try {
            const response = await deleteTaskRequest(id);
            toast.info(response.data.message);
            return response.data;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data);
        }
    }
)

export const updateField = createAsyncThunk(
    'task/updateField',
    async ({id, fieldName, value}) => {
        try {
            const response = await patchTaskRequest(id, fieldName, value);
            return response.data;
        } catch (error) {

        }
    }
)

const tasksSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
        currentTask: {
            id: 0,
            title: '',
            priority: '',
            status: '',
            createdAt: null,
            updatedAt: null
        },
        error: "",
        validationErrors: [],
        loading: false,
        message: ''
    },
    reducers: {
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    },
    extraReducers: {
        [addTask.pending]: (state, action) => {
            state.loading = true;
        },
        [addTask.fulfilled]: (state, action) => {
            state.loading = false;
            state.tasks.push(action.payload);
        },
        [addTask.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload.details) {
                const parsedErrors = getErrorResponseWithValidationDetails(action.payload);
                state.error = parsedErrors.details[0].issue;
            } else {
                state.error = action.payload.message;
            }
        },
        [getTasks.pending]: (state, action) => {
            state.loading = true;
        },
        [getTasks.fulfilled]: (state, action) => {
            state.loading = false;
            state.tasks = action.payload;
        },
        [getTasks.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload.details) {
                const parsedErrors = getErrorResponseWithValidationDetails(action.payload);
                state.error = parsedErrors.details[0].issue;
            } else {
                state.error = action.payload.message;
            }
        },
        [getTask.pending]: (state, action) => {
            state.loading = true;
        },
        [getTask.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentTask = action.payload;
        },
        [getTask.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [deleteTask.fulfilled]: (state, {payload}) => {
            state.message = payload.message;
        },
        [deleteTask.rejected]: (state, {payload}) => {
            state.error = payload.message;
        },
        [updateField.fulfilled]: (state, action) => {
            const payload = action.payload[0];
            state.currentTask.title = payload.title;
            state.currentTask.status = payload.status;
            state.currentTask.priority = payload.priority;
        }
    }
});

export const {removeTask} = tasksSlice.actions;

export const taskSelector = (state) => ({...state.task});

export default tasksSlice.reducer;