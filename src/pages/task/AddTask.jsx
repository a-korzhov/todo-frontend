import React, {useEffect, useState} from 'react';
import {MDBBtn, MDBCardBody, MDBInput, MDBRadio, MDBSpinner, MDBValidation} from "mdb-react-ui-kit";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {addTask, taskSelector} from "../../store/features/taskSlice";
import {StyledWrapper} from "../../components/style";

const AddTask = () => {
    const [taskForm, setTaskForm] = useState({
        title: '',
        priority: '',
        status: 'todo',
    });
    const {title, priority, status} = taskForm;

    const {loading, error, validationErrors} = useSelector(taskSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (validationErrors.length > 0) {
            for (let vd of validationErrors) {
                toast.error(vd.issue);
            }
        } else {
            error && toast.error('Admin cannot create tasks');
        }
    }, [error, validationErrors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && priority && status) {
            dispatch(addTask({taskForm, toast}));
        }
    };

    const handleInputChange = (e) => {
        setTaskForm({...taskForm, [e.target.name]: e.target.value});
    };
    const handlePriorityChange = (priority) => setTaskForm({...taskForm, priority});
    const priorityRadio = (label) => {
        return <MDBRadio
            name='priority'
            value={priority}
            label={label}
            onChange={() => handlePriorityChange(label)}
            inline
        />
    }

    return (
        <StyledWrapper>
            <MDBCardBody>
                <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
                    <div className="col-md-12">
                        <label>TODO</label>
                        <MDBInput
                            type="text"
                            value={title}
                            name="title"
                            onChange={handleInputChange}
                            required
                            invalid
                            validation="Title is missing"
                            contrast
                        />
                    </div>
                    <div className="col-md-12">
                        {priorityRadio('minor')}
                        {priorityRadio('major')}
                        {priorityRadio('critical')}
                        {priorityRadio('trivial')}
                    </div>
                    <div className="col-12">
                        <MDBBtn className="mt-2">
                            {loading && (
                                <MDBSpinner
                                    size="sm"
                                    role="status"
                                    tag="span"
                                    className="me-2"
                                />
                            )}
                            Add task
                        </MDBBtn>
                    </div>
                </MDBValidation>
            </MDBCardBody>
        </StyledWrapper>
    );
};

export default AddTask;
