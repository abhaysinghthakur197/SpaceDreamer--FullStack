import React, { useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        imageUrl: '',
        title: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const sectionStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/SignupGif.gif)`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // Set text color to be readable against the background
        padding: '100px 0', // Adjust padding as needed
      };
    return (
        
            <Container style={sectionStyle}>
                <div className='d-flex align-items-center justify-content-center vh-100'>
                    <Card style={{ width: '38rem', background: 'transparent', border: 'none', }} bg="black">
                        <Card.Body>
                            <Card.Title className='text-center text-white text-decoration-underline' style={{ fontWeight: 'bolder', fontFamily: 'Helvetica, Arial, sans-serif', color: '#834651', fontSize: '2.6rem' }}>Log <span className='text-warning'>In</span></Card.Title>
                            <Form onSubmit={handleSubmit}>
                                
                                <Form.Group controlId="formTitle" className='my-4'>
                                    <Form.Label className='text-white'>Email:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        class="form-control bg-secondary"
                                        id="eamil"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formDescription" className='my-4'>
                                    <Form.Label className='text-white'>Password:</Form.Label>
                                    <Form.Control
                                        type="password"

                                        placeholder="Enter password"
                                        name="password"
                                        id="password"
                                        class="form-control bg-secondary"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <div className='d-flex  align-items-center justify-content-center '>
                                    <Button variant="outline-light" type="submit" className='mx-3' as={Link}  to="/Signin">
                                        Log In
                                    </Button>
                                    <Button variant="outline-light" type="submit" as={Link}  to="/Signup">
                                        Sign up
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
       

    )
}

export default Login