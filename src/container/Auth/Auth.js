import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import InputBox from '../../components/InputBox/InputBox';
import { Section } from '../../components/UI/Heading/Heading';
import { Main } from '../../components/UI/TextArea/TextArea';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { forgetRequest, loginRequest, signupRequest } from '../../redux/action/auth.action';
import { useNavigate } from 'react-router-dom';

function Auth(props) {
    const [type, setType] = useState("login")

    let authObj, iniVal;

    if (type === 'login') {
        authObj = {
            email: yup.string().email().required(),
            password: yup.string().required()
        }

        iniVal = {
            email: '',
            password: ''
        }
    } else if (type === 'signup') {
        authObj = {
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required(),
            con_password: yup.string().required().test("con_password", "Not Same Password", function (value) {
                // console.log(v);
                if (value == this.parent.password) {
                    return true;
                } else {
                    return false;
                }
            })
        }

        iniVal = {
            name: '',
            email: '',
            password: '',
            con_password: ''
        }
    } else {
        authObj = {
            email: yup.string().email().required(),
        }

        iniVal = {
            email: ''
        }
    }

    let AuthSchema = yup.object().shape(authObj);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSingUp = (data) => {
        dispatch(signupRequest(data))
    }

    const handleLogIn = (data) => {
        dispatch(loginRequest({
            data: data,
            callback: (route) => {
                navigate("/")
            }
        }))
    }

    const handleForget = (data) => {
        dispatch(forgetRequest(data))
    }

    const formikObj = useFormik({

        initialValues: iniVal,

        onSubmit: values => {
            // console.log(values)

            if (type === 'login') {
                handleLogIn(values)
            } else if (type === 'signup') {
                handleSingUp(values);
            } else {
                handleForget(values)
            }
        },

        enableReinitialize: true,
        validationSchema: AuthSchema
    });

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formikObj
    console.log(errors);

    return (
        <Main>
            <section id="departments" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            type === 'login' ? <Section>Login</Section> :
                                type === 'signup' ? <Section>Signup</Section> :
                                    <Section>Forget Pasword</Section>
                        }

                    </div>

                    <form onSubmit={handleSubmit} role="form" className="php-email-form">
                        <div className="row justify-content-center">
                            {
                                type === 'signup' ?
                                    <div className="col-md-8 form-group">
                                        <InputBox
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            TextError={errors.name && touched.name ? <span>{errors.name}</span> : ''}
                                        />
                                        {/* {errors.name && touched.name ? <span>{errors.name}</span> : null} */}
                                    </div>
                                    :
                                    null
                            }

                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                <InputBox
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    TextError={errors.email && touched.email ? <span>{errors.email}</span> : ''}
                                />
                                {/* {errors.email && touched.email ? <span>{errors.email}</span> : null} */}
                            </div>


                            {

                                type === 'login' || type === 'signup' ?
                                    <div className="col-md-8 form-group mt-3 mt-md-0">
                                        <InputBox
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="Your password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            TextError={errors.password && touched.password ? <span>{errors.password}</span> : ''}
                                        />
                                        {/* {errors.password && touched.password ? <span>{errors.password}</span> : null} */}
                                    </div>
                                    : null

                            }

                            {

                                type === 'signup' ?
                                    <div className="col-md-8 form-group mt-3 mt-md-0">
                                        <InputBox
                                            type="password"
                                            className="form-control"
                                            name="con_password"
                                            id="con_password"
                                            placeholder="Your Confirmed password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.con_password}
                                            TextError={errors.con_password && touched.con_password ? <span>{errors.con_password}</span> : ''}
                                        />
                                        {/* {errors.con_password && touched.con_password ? <span>{errors.con_password}</span> : null} */}
                                    </div>
                                    : null

                            }

                        </div>

                        <div class="text-center">
                            {
                                type === 'login' ? <Button type="submit">Login</Button> :
                                    type === 'signup' ? <Button btnType="Secondary" type="submit">SignUp</Button> :
                                        <Button btnType="Outline" type="submit">Submit</Button>
                            }
                        </div>
                    </form>

                    {
                        type === 'login' ? <span>Created An Acount <Button onClick={() => setType('signup')}>Signup</Button></span> :
                            <span>Alredy Have An Acount <Button onClick={() => setType('login')}>Login</Button></span>
                    }
                    <br></br>
                    {
                        type === 'login' ? <span>Forget Password<Button onClick={() => setType('forgot')}>Forget Pasword</Button></span> :
                            null
                    }


                </div>
            </section>
        </Main>

    );
}

export default Auth;