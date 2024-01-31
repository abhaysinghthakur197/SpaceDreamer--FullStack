import React from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import { articleSchema } from '../../schemas/AddarticleSchema'

// formik
import { Field, useFormik } from 'formik';

import axios from 'axios';

const Articleform = () => {
    const formData = {
        coverImage: null,
        title: '',
        body: '',
    }

    const onSubmit = async (values) => {
        console.log("Values file", values);

        try {

            const formData = new FormData();
            formData.append('coverImage', values.coverImage);
            formData.append('title', values.title);
            formData.append('body', values.body);

            const response = await axios.post('http://localhost:8080/api/article/addnews', values, {
                withcredentials: true, headers: {
                    'Content-Type': 'multipart/form-data',
                }
            },);
            console.log("response from server", response);
            // if(response.status === 200){
            //     alert("Your login successful!!!");
            //     // navigate("/home")
            // }
            // console.log('Cookies:', document.cookie);
        } catch (error) {
            // if(error.response.status === 401){
            //     alert("Invalid email or password!, Please try again")   
            // }
            console.log("error during login", error);
        }
        // action.resetForm();

    }

    const formik = useFormik({
        initialValues: formData,
        validationSchema: articleSchema,
        onSubmit
    })

    const handleFileChange = (e) => {
        const fileInput = e.target;
        const file = fileInput.files.length > 0 ? fileInput.files[0] : null;

        const fileName = file ? file.name : null;

        formik.setFieldValue('coverImage', fileName);
    };


    // const { values,errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    //     initialValues: formData,
    //     validationSchema: articleSchema,
    //     onSubmit: async (values) => {
    //         console.log("Add news values", values);
    //         try {
    //             const response  = await axios.post('http://localhost:8080/api/article/addnews', values, { withcredentials: true });
    //             console.log("response from server", response);
    //             // if(response.status === 200){
    //             //     alert("Your login successful!!!");
    //             //     // navigate("/home")
    //             // }
    //             // console.log('Cookies:', document.cookie);
    //         } catch (error) {
    //             // if(error.response.status === 401){
    //             //     alert("Invalid email or password!, Please try again")   
    //             // }
    //             console.log("error during login",error);
    //         }
    //         // action.resetForm();
    //     }
    // })
    return (
        <Card style={{ width: '38rem' }} bg="dark">
            <Card.Body>
                <Card.Title className='text-center text-white' style={{ fontWeight: 'bolder', fontFamily: 'Helvetica, Arial, sans-serif', color: '#834651' }}>Add Article</Card.Title>
                <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                    <Form.Group controlId="formFile" className='my-4' >
                        <Form.Label className='text-white'>Image</Form.Label>
                        <Form.Control
                            required
                            type="file"
                            placeholder="Enter image "
                            name="coverImage"
                            className="form-control"
                            onChange={handleFileChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.file && formik.errors.file ? (
                            <p className="form-error text-danger">{formik.errors.file}</p>
                        ) : null}
                    </Form.Group>
                    <Form.Group controlId="formTitle" className='my-4'>
                        <Form.Label className='text-white'>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter title"
                            name="title"
                            className="form-control"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <p className="form-error text-danger">{formik.errors.title}</p>
                        ) : null}
                    </Form.Group>
                    <Form.Group controlId="formBody" className='my-4'>
                        <Form.Label className='text-white'>Description</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            placeholder="Enter description"
                            name="body"
                            className="form-control"
                            value={formik.values.body}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.body && formik.errors.body ? (
                            <p className="form-error text-danger">{formik.errors.body}</p>
                        ) : null}
                    </Form.Group>
                    <div className='d-flex  align-items-center justify-content-center '>
                        <Button variant="outline-light" type="submit" className='mx-3'>
                            Submit
                        </Button>
                        <Button variant="outline-light" type="submit">
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Articleform
