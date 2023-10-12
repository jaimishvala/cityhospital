import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { type } from '@testing-library/user-event/dist/type';

function FormSubmition(props) {
    // const [currState, setCurrState] = useState(1);
    // const [allState, setAllstate] = useState(3);

    let SubmitionFormschema = yup.object().shape({
        name: yup.string()
            .required("Please Enter Name")
            .matches(/^[a-zA-Z]{2,30}$/, "Please Enter Valid Name"),
        email: yup.string()
            .email("Please Enter Valid Email")
            .required("Please Enter Email"),

        price: yup.string()
            .required("Please Enter a Price")
            .matches(
                /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
                "Please Enter a Positive"
            ),
        phone: yup.string()
            .required("Please Enter Phone Number")
            .matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, "Please Enter Valid Phone Number")
            .typeError("Only Digit Number Allowed"),
        file: yup.mixed()
            .required("Please Enter File"),

    })


    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            name: '',
            email: '',
            price: '',
            phone: '',
            file: ''
        },
        onSubmit: values => {
            console.log(values);

        },

        validationSchema: SubmitionFormschema
    })

    console.log(errors);


    const handlePrevious = () => {
        console.log("handlePrevious");


    }

    const handleNext = () => {
        console.log("handleNext");

    }


    return (

        <div className='container'>
            <br></br>
            <h2>Form Submition:</h2>
            <br></br>



            <form onSubmit={handleSubmit}>

                <>
                    <span>Name:</span>
                    <input
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    {errors.name && touched.name ? <span>{errors.name}</span> : null}
                    <br></br><br></br>
                    <span>Email:</span>

                    <input
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email ? <span>{errors.email}</span> : null}

                    <br></br><br></br>


                    <button onClick={handlePrevious} disabled={true}>Previous</button>
                    <button onClick={handleNext} disabled={false}>Next</button>

                </>

            </form>



            {/* <>
                <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Enter Price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                />
                {errors.price && touched.price ? <span>{errors.price}</span> : null}


                <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                />
                {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}


                <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.file}
                />
                {errors.file && touched.file ? <span>{errors.file}</span> : null}
            </> */}



            <br></br>
        </div>
    );
}

export default FormSubmition;