import React from 'react';
import { Section } from '../../components/UI/Heading/Heading';
import { Main, P } from '../../components/UI/TextArea/TextArea';
import Button from '../../components/UI/Button/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { type } from '@testing-library/user-event/dist/type';
import InputBox from '../../components/InputBox/InputBox';
import { useEffect } from 'react';

function Appointment({ onHandleSubmit }) {

    let d = new Date()
    let nd = new Date()
    nd.setDate(d.getDate() - 1)
    // console.log(nd);


    let Appointschema = yup.object().shape({
        name: yup.string()
            .required("Please Enter Name")
            .matches(/^[a-zA-Z]{2,30}$/, "Please Enter Valid Name"),
        email: yup.string()
            .email("Please Enter Valid Email")
            .required("Please Enter Email"),
        phone: yup.string()
            .required("Please Enter Phone Number")
            .matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, "Please Enter Valid Phone Number")
            .typeError("Only Digit Number Allowed"),
        date: yup.date()
            .min(nd, "Please Select Valid Date")
            .required("Please Select Date"),
        department: yup.string()
            .required("Please Select Any One Option"),
        message: yup.string()
            .required("Please Enter Message"),
        // .matches(/(\s\s\s*)/, "Please Extra Space Remove")
        // .min(30, "Minimum 30 Character Valid")
        // .max(100, "Maximum 100 Charecter Allowed")
        // .test("message", "More Than 5 Word Alowed", function (value) {
        //     // let arr = value.split(" ")

        //     if (value.length <= 5) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }),

        file: yup.mixed()
            .required("Please Enter File")
        // .test("file", "More Than 2Mb And Jpg File Allowed", function (v) {
        //     console.log(v);

        //     if (v <= 2000 && v === "jpg") {
        //         return true;
        //     } else {
        //         return false;
        //     }

        // })
    })


    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
            file: ''

        },
        onSubmit: (values, action) => {
            // console.log(values);
            onHandleSubmit(values)

            // let array = values.message.split(" ")
            // // console.log(array);

            // let newArray = array.map((v) =>
            //     v[0].toUpperCase() + v.substring(1)
            // )
            // // console.log(newArray);

            // console.log(newArray.join(" "));
            action.resetForm()

        },

        validationSchema: Appointschema
    })

    // console.log(Appointschema);

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, setValues } = formikObj
    // console.log(errors);


    return (
        <Main>
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

                                {/* Name: */}
                                <InputBox type="text"
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
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                {/* Email */}
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
                            <div className="col-md-4 form-group mt-3 mt-md-0">

                                {/* Phone */}
                                <InputBox
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                    TextError={errors.phone && touched.phone ? <span>{errors.phone}</span> : ''}
                                />
                                {/* {errors.phone && touched.phone ? <span>{errors.phone}</span> : null} */}

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">

                                {/* Date */}
                                <InputBox
                                    type="date"
                                    name="date"
                                    className="form-control datepicker"
                                    id="date"
                                    placeholder="Appointment Date"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.date}
                                    TextError={errors.date && touched.date ? <span>{errors.date}</span> : ''}
                                />
                                {/* {errors.date && touched.date ? <span>{errors.date}</span> : null} */}
                            </div>
                            <div className="col-md-4 form-group mt-3">

                                {/* Department */}
                                <select
                                    name="department"
                                    id="department"
                                    className="form-select"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.department}
                                >
                                    <option value=''>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>

                                </select>
                                {errors.department && touched.department ? <span style={{ color: 'red' }}>{errors.department}</span> : null}
                            </div>

                            {/* File */}

                            <div className="col-md-4 form-group mt-3">

                                <InputBox
                                    type="file"
                                    name="file"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.file}
                                    TextError={errors.file && touched.file ? <span>{errors.file}</span> : ''}
                                />
                                {/* {errors.file && touched.file ? <span>{errors.file}</span> : null} */}
                            </div>

                        </div>

                        <div className="form-group mt-3">
                            {/* Message */}
                            <textarea
                                className="form-control"
                                name="message"
                                rows={5}
                                placeholder="Message"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                            />
                            {errors.message && touched.message ? <span style={{ color: 'red' }}>{errors.message}</span> : null}

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
        </Main>
    );
}

export default Appointment;