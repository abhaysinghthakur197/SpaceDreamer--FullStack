import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'

const Welcome = () => {
    return (
        <div className='welcome bg-black text-light'>
            <Container className='py-5 vh-110 vh-md-75 vh-lg-50'>
                <Row className='my-5 align-items-center'>
                    <Col md={6} className=' my-5 py-5text-center'>
                        <div className="text-container">
                            <h1 className='display-0 font-weight-bold'>Welcome...</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto. Nostrum delectus odit ut velit. Molestiae repellendus non tenetur. Voluptatem optio nihil odio tenetur eligendi libero repudiandae corrupti eveniet in?</p>
                            <Button variant='outline-light' className='mx-1 my-1'>Search</Button>
                            
                        </div>

                    </Col>
                    <Col md={6} className='text-center'>
                        <div className="image-container">
                            <img src={process.env.PUBLIC_URL + "/welcomeImg.gif"} alt="Welcome GIF" className='img-fluid' width={400} height={400} />
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Welcome;
