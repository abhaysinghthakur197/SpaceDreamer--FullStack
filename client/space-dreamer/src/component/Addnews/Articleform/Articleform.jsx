import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap';

const Articleform = () => {
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
    return (
            <Card style={{ width: '38rem' }} bg="dark">
            <Card.Body>
                <Card.Title className='text-center text-white' style={{ fontWeight: 'bolder', fontFamily: 'Helvetica, Arial, sans-serif', color: '#834651' }}>Add Article</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formImageUrl" className='my-4' >
                        <Form.Label className='text-white'>Image URL</Form.Label>
                        <Form.Control
                            type="file"
                            placeholder="Enter image URL"
                            name="imageUrl"
                            class="form-control"
                            id="coverImage"
                            value={formData.imageUrl}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formTitle" className='my-4'>
                        <Form.Label className='text-white'>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            name="title"
                            class="form-control"
                            id="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formDescription" className='my-4'>
                        <Form.Label className='text-white'>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter description"
                            name="description"
                            id="body"
                            class="form-control"
                            value={formData.description}
                            onChange={handleChange}
                        />
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
