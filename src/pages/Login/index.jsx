import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../store/context/Context';

const Login = props => {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const { login, dispatchLogin } = useContext(Context);
    //form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(setFormErrors(validate(formValues)));
        if (setFormErrors(validate(formValues))) {
            console.log('====================================');
            console.log(formValues);
            console.log('====================================');
        }
    };

    //form validation handler
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


    return (
        <div className="container">
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
                                    setFormErrors(validate(formValues));
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
        </div>

    )
}

Login.propTypes = {

}

export default Login
