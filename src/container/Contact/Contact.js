import React from 'react';
import { ContactH4, Section } from '../../components/UI/Heading/Heading';
import { Main, P, P1 } from '../../components/UI/TextArea/TextArea';
import * as yup from 'yup';
import { useFormik } from 'formik';
import InputBox from '../../components/InputBox/InputBox';

function Contact() {

    let ContactSchema = yup.object().shape({
        name: yup.string()
            .required("Please Enter Name")
            .matches(/^[a-zA-Z ]{2,30}$/, "Please Enter Valid Name"),
        email: yup.string()
            .email("Please Enter Valid Email")
            .required("Please Enter Email"),
        subject: yup.string()
            .required("Please Enter Subject")
            .max(30, "Please Enter Valid Subject"),
        message: yup.string()
            .required("Please Enter Messge")
            .min(2, "Minimum 30 Character Valid")
            .max(100, "Maximum 100 Charecter Allowed")
    });

    // console.log(ContactSchema);

    const formikObj = useFormik({

        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },

        onSubmit: values => {
            console.log(values);
        },

        validationSchema: ContactSchema
    });

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formikObj

    // console.log(errors);

    return (
        // <Main>
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <Section>Contact</Section>
                    <P>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</P>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <ContactH4>Location:</ContactH4>
                                <P1> F-505, Inovative Plazza New Delhi, India</P1>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope" />
                                <ContactH4>Email:</ContactH4>
                                <P1>cityhospital@example.com</P1>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone" />
                                <ContactH4>Call:</ContactH4>
                                <P1>+91 9988776655</P1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form role="form" method='post' className="php-email-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 form-group">
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



                                <div className="col-md-6 form-group mt-3 mt-md-0">
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



                            </div>
                            <div className="form-group mt-3">
                                <InputBox
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subject}
                                    TextError={errors.subject && touched.subject ? <span>{errors.subject}</span> : ''}
                                />
                                {/* {errors.subject && touched.subject ? <span>{errors.subject}</span> : null} */}
                            </div>



                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows={5}
                                    placeholder="Message"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                />
                                {errors.message && touched.message ? <span style={{color:'red'}}>{errors.message}</span> : null}
                            </div>


                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        // </Main>
    );
}

export default Contact;