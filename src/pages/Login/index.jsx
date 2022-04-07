import { ErrorMessage, Field, Form, Formik } from "formik";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { loginAPI } from "../../api/Login";
import { login, removeLogin } from "../../redux/Login";
import useLoading from "../../hook/HookLoading";
import { notificationSuccess } from "../../helper/Notification";
import { LOGIN_SUCCESS, MESSAGE_FAILURE } from "../../constants/Respone";

const Login = props => {
    const history = useHistory()
    const [hidden, display, Loading] = useLoading();

    const dispatch = useDispatch();
    const isToken = useSelector((state) => state.Login)
    console.log(isToken);
    const handleSubmit = async (value) => {
        try {
            const res = await loginAPI(JSON.stringify(value));
            let temp = res.data;
            console.log(temp);
            localStorage.setItem('token', temp.token)
            localStorage.setItem('user', temp.username)
            dispatch(login())
            history.push('/')
            notificationSuccess(LOGIN_SUCCESS, 1000);
        } catch (err) {
            console.log(err.response.data.message);
            notificationSuccess(MESSAGE_FAILURE, 1000);
        }

    };

    const handleLogout = () => {
        dispatch(removeLogin())
        toast.success("You Logout Successful !", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    const LoginSchema = Yup.object().shape({
        Username: Yup.string()
            .required("Username is required"),
        password: Yup.string()
            .min(3, "Password must be 3 characters at minimum")
            .required("Password is required"),
    });

    return (
        <div className="container">
            <div className='container-form container-login'>
                {!isToken ?
                    <div className="row">
                        <div className="col-lg-12">
                            <Formik
                                initialValues={{ Username: "", password: "" }}
                                validationSchema={LoginSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ touched, errors, isSubmitting, values }) =>
                                (
                                    <div>
                                        <div className="row mb-2">
                                            <div className="col-lg-12 text-center">
                                                <h1 className="mt-5">Login Form</h1>
                                            </div>
                                        </div>
                                        <Form>
                                            <div className="mb-4">
                                                <div className="form-group">
                                                    <label>Username</label>
                                                    <Field
                                                        name="Username"
                                                        placeholder="Enter Username"
                                                        autocomplete="off"
                                                        className={`mt-2 form-control
                          ${touched.Username && errors.Username ? "is-invalid" : ""}`}
                                                    />

                                                    <ErrorMessage
                                                        component="div"
                                                        name="Username"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password" className="mt-3">
                                                        Password
                                                    </label>
                                                    <Field
                                                        type="password"
                                                        name="password"
                                                        placeholder="Enter password"
                                                        className={`mt-2 form-control
                          ${touched.password && errors.password
                                                                ? "is-invalid"
                                                                : ""
                                                            }`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="password"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                            </div>
                                            <button type="submit" className='btn btn-primary m-auto text-center d-block'>Sign In</button>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </div> : <button type="button" className='btn btn-primary m-auto text-center d-block' onClick={handleLogout}>Logout</button>
                }

            </div>
            {/* {Loading} */}
        </div>
    )
}

Login.propTypes = {

}

export default Login
