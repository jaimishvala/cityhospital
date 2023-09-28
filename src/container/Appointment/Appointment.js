import React from 'react';
import { Section } from '../../components/UI/Heading/Heading';
import { Main, P } from '../../components/UI/TextArea/TextArea';
import Button from '../../components/UI/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';

function Appointment(props) {


    let Appointschema = yup.object().shape({
        name: yup.string()
            .required("Please Enter Name")
            .matches(/^[a-zA-Z]{2,30}$/, "Please Enter Valid Name"),
        email: yup.string()
            .email("Please Enter Valid Email")
            .required("Please Enter Email"),
        phone: yup.string()
            .required("Please Enter Phone Number")
            .matches(/^\d{10}$/, "Please Enter Valid Phone Number"),
        date: yup.string()
            .required("Please Select Date")
            .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,"Please Enter Valid Date"),
        department: yup.string()
            .required("Please Select Any One Option"),
        message: yup.string()
            .required("Please Enter Message")
            .matches(/^(?!.*\S[MG]O\b)[a-zA-Z0-9,()]+(?: [a-zA-Z0-9,()]+)*$/, "Please Extra Space Remove")
            .min(30, "Minimum 30 Character Valid")
            .max(100, "Maximum 100 Charecter Allowed")



    })


    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: ''

        },
        onSubmit: values => {
            console.log(values);
        },

        validationSchema: Appointschema
    })

    // console.log(Appointschema);

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formikObj


    return (
        // <Main>
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <Section>Make an Appointment</Section>
                    <P>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</P>
                </div>

                <form role="form" className="php-email-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-4 form-group">
                            <input type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name ? <span>{errors.name}</span> : null}

                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.name && touched.name ? <span>{errors.email}</span> : null}

                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                id="phone"
                                placeholder="Your Phone"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 form-group mt-3">
                            <input
                                type="date"
                                name="date"
                                className="form-control datepicker"
                                id="date"
                                placeholder="Appointment Date"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.date}
                            />
                            {errors.date && touched.date ? <span>{errors.date}</span> : null}
                        </div>
                        <div className="col-md-4 form-group mt-3">
                            <select
                                name="department"
                                id="department"
                                className="form-select"
                                onChange={handleChange}
                                // onBlur={handleBlur}
                                value={values.department}
                            >
                                <option value>Select Department</option>
                                <option value="Department 1">Department 1</option>
                                <option value="Department 2">Department 2</option>
                                <option value="Department 3">Department 3</option>

                            </select>
                            {errors.department && touched.department ? <span>{errors.department}</span> : null}
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <textarea
                            className="form-control"
                            name="message"
                            rows={5}
                            placeholder="Message (Optional)"
                            defaultValue={""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                        />
                        {errors.message && touched.message ? <span>{errors.message}</span> : null}

                    </div>
                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                    </div>
                    <div className="text-center"><Button type="submit">Make an Appointment</Button></div>
                </form>

            </div>
        </section>
        // </Main>
    );
}

export default Appointment;