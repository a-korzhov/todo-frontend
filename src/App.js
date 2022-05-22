import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
    Activation,
    AddTask,
    ChangePassword,
    ForgotPassword,
    Login,
    Profile,
    Settings,
    SignUp,
    Task,
    TaskList
} from "./pages";
import {Header, PrivateRoute, PublicRoute} from "./components";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <ToastContainer position="top-center"/>
            <Routes>
                {['/', '/home', '/profile'].map((path, i) =>
                    <Route key={i} path={path} element={<PrivateRoute><Profile/></PrivateRoute>}/>
                )}
                <Route exact path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
                <Route exact path="/signup" element={<SignUp/>}/>
                <Route exact path="/activation" element={<Activation/>}/>
                <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
                <Route exact path="/change-password" element={<ChangePassword/>}/>
                <Route exact path="/settings" element={<PrivateRoute><Settings/></PrivateRoute>}/>
                <Route exact path="/add-task" element={<PrivateRoute><AddTask/></PrivateRoute>}/>
                <Route exact path="/tasks" element={<PrivateRoute><TaskList/></PrivateRoute>}/>
                <Route exact path="/tasks/:id" element={<PrivateRoute><Task/></PrivateRoute>}/>
            </Routes>
        </div>
    );
}

export default App;
