import { ErrorMessage, Field, Form, Formik } from "formik";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { loginAPI } from "../../api/Login";
import { LOGIN_SUCCESS, MESSAGE_FAILURE } from "../../constants/Respone";
import { notificationError, notificationSuccess } from "../../helper/Notification";
import { login, removeLogin } from "../../redux/Login";
import { getUser } from "../../redux/User";

const Login = props => {
    const history = useHistory()
    const dispatch = useDispatch();
    const isToken = useSelector((state) => state.Login)
    const handleSubmit = async (value) => {
        try {
            const res = await loginAPI(JSON.stringify(value));
            let temp = res.data;
            localStorage.setItem('token', temp.token)
            localStorage.setItem('User', JSON.stringify(temp.loginUser))
            notificationSuccess(LOGIN_SUCCESS, 1000);
            setTimeout(() => {
                dispatch(login());
                dispatch(getUser(JSON.stringify(temp.loginUser)))
                history.replace("/");
            }, 1000);
        } catch (err) {
            console.log(err.response.data);
            notificationError(MESSAGE_FAILURE, 3000);
        }
    };

    const handleLogout = () => {
        dispatch(removeLogin())
        localStorage.removeItem('token')
        localStorage.removeItem('User')
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
        <div className="container position-relative">
            <div className='container-form container-login'>
                {!isToken ?
                    <div className="row">
                        <div className="col-lg-12">
                            <Formik
                                initialValues={{ Username: "", password: "" }}
                                validationSchema={LoginSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ touched, errors }) =>
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
                                                        autocomplete="off"
                                                        name="Username"
                                                        placeholder="Enter Username"
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
                                                        autocomplete="off"
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
        </div>
    )
}

Login.propTypes = {

}

export default Login
