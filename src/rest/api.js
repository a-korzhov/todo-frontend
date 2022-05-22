import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('auth')) {
        req.headers.Authorization = localStorage.getItem('auth');
    }
    return req;
})

const patchRequestBody = (id, fieldName, replaced) => {
    return [{
        op: "replace",
        path: `/${id}/${fieldName}`,
        value: replaced
    }]
}

// ------- GET REQUESTS ---------
export const getCurrentUserRequest = () => API.get('/users/current');
export const getTasksRequest = () => API.get('/tasks');
export const getTaskByIdRequest = (id) => API.get(`/tasks/${id}`);

// -------- POST REQUESTS ---------
export const loginRequest = (data) => API.post('/users/authorization', data);
export const signupRequest = (data) => API.post('/users', data);
export const createNewPasswordRequest = (data) => API.post('/users/password', data);
export const uploadAvatarRequest = (file) => {
    let formData = new FormData();
    formData.append("file", file);
    return API.post(`/users/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
export const createTaskRequest = (data) => API.post('/tasks', data);

// ----------PATCH REQUESTS ----------
export const patchUserRequest = (id, fieldName, replaced) => {
    let obj = patchRequestBody(id, fieldName, replaced);
    return API.patch('/users', obj, {
        headers: {
            'Content-Type': 'application/json-patch+json'
        }
    });
}
export const patchTaskRequest = (id, fieldName, replaced) => {
    let obj = patchRequestBody(id, fieldName, replaced);
    return API.patch('/tasks', obj, {
        headers: {
            'Content-Type': 'application/json-patch+json'
        }
    });
}

// ----------PUT REQUESTS ----------
export const activationRequest = (token) => API.put('/users/activation', null, {params: {token: token}});
export const updatePasswordRequest = (data) => API.put('/users/password', data);

// --------DELETE REQUESTS ------------
export const deleteTaskRequest = (id) => API.delete(`/tasks/${id}`);