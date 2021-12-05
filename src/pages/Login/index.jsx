import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../store/context/Context';
const Login = props => {
    const initialValues = { email: "", password: "" };
    const history = useHistory()
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { dispatchLogin, users, login } = useContext(Context);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        let result = verifyLogin()
        if (result.length > 0) {
            dispatchLogin({ type: 'LOGIN', user: result[0] })
            history.push('/')
            toast.success("Login Successful !", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            setIsSubmitting(true);
            toast.error("Login Failure !", {
                position: toast.POSITION.TOP_RIGHT
            });
        }

    };
    const verifyLogin = () => {
        return users.filter(user => user.password === formValues.password && user.email === formValues.email);
    }
    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Cannot be blank";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.password) {
            errors.password = "Cannot be blank";
        } else if (values.password.length < 6) {
            errors.password = "Password must be more than 6 characters";
        }

        return errors;
    };

    const handleLogout = () => {
        dispatchLogin({ type: 'LOGOUT', user: null })
        toast.success("You Logout Successful !", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    return (
        <div className="container">
            {!login ?
                <div className='container-form container-login'>
                    <h2 className='text-center'>Sign In</h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-row">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formValues.email}
                                onBlur={(e) => {
                                    if (e.target.value.length === 0) {
                                        setFormErrors({ ...formErrors, email: "Cannot be blank" })
                                    }
                                }}
                                onChange={(e) => {
                                    if (e.target.value.length === 0) {
                                        setFormErrors({ ...formErrors, email: "Cannot be blank" })
                                    }
                                    else {
                                        setFormErrors({ ...formErrors, email: "" })
                                    }
                                    setFormValues({ ...formValues, email: e.target.value })
                                }}
                                className={formErrors.email && "input-error"}
                            />
                            {formErrors.email && (
                                <span className="error">{formErrors.email}</span>
                            )}
                        </div>

                        <div className="form-row">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formValues.password}
                                // onChange={handleChange}
                                onChange={(e) => {
                                    if (e.target.value.length === 0) {
                                        setFormErrors({ ...formErrors, password: "Cannot be blank" })
                                    }
                                    else {
                                        setFormErrors({ ...formErrors, password: "" })
                                    }
                                    setFormValues({ ...formValues, password: e.target.value })
                                }}
                                onBlur={(e) => {
                                    if (e.target.value.length === 0) {
                                        setFormErrors({ ...formErrors, password: "Cannot be blank" })
                                    }
                                }}
                                className={formErrors.password && "input-error"}
                            />
                            {formErrors.password && (
                                <span className="error">{formErrors.password}</span>
                            )}
                        </div>
                        <button type="submit" className='btn btn-success m-auto text-center d-block'>Sign In</button>
                    </form>
                </div>
                :
                <div className='container-form container-login'>
                    <h2 className='text-center'>Logout</h2>
                    <button type="button" className='btn btn-success m-auto text-center d-block' onClick={() => handleLogout()}>Logout</button>
                </div>
            }
        </div>

    )
}

Login.propTypes = {

}

export default Login
