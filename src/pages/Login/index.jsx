import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
const Login = props => {
    const initialValues = { email: "", password: "" };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        console.log(formValues);
    };

    //input change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
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

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();
        }
    }, [formErrors]);


    return (
        <div className="container">
            <div className='container-form container-login'>
                <h2 className='text-center'>Sign In</h2>
                {Object.keys(formErrors).length === 0 && isSubmitting && (
                    <span className="success-msg">Form submitted successfully</span>
                )}
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formValues.email}
                            onChange={handleChange}
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
                            onChange={handleChange}
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
