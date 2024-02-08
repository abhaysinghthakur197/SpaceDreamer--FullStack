import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Row, Carousel } from 'react-bootstrap';

const UseraddNews = () => {

    const [alldata, setAlldata] = useState([])

    useEffect(() => {
        fetchDate();
    }, [])

    const fetchDate = async () => {
        try {
            await axios.get('http://localhost:8080/api').then(response => {
                console.log("all articles by users", response)
                setAlldata(response.data['allArticle'])

            })
        } catch (e) {
            console.log("error in useraddnews api call", e)
        }
    }

    console.log(alldata)
    return (
        <div className='border'>
            <div className='border border-danger my-5 mx-5 '>
                <h2 className='text-center text-white font-family-Helvetica, Arial, sans-serif'> News By SP<span className='text-danger'>A</span>CE <span className='text-warning'>DREAMER'<span className='text-white'>s</span></span></h2>
            </div>
            <div className=' container border border-warning'>
                <Carousel controls={false} indicators={false}>
                    {alldata.map((item, index) => (
                        <Carousel.Item>
                            <Row key={index} className='g-0'>
                                <Card style={{width:"18rem"}} className='bg-danger'>
                                    <Card.Img variant="top" src={item.coverImageURL} alt="Space news image" className="img-fluid" />
                                    <Card.Body>
                                        <Card.Title>
                                            {item.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {item.body}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Img src={item.coverImageURL} />
                                    <Card.Body>
                                        <Card.Title>
                                            {item.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {item.body}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Img src={item.coverImageURL} />
                                    <Card.Body>
                                        <Card.Title>
                                            {item.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {item.body}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>


    )
}

export default UseraddNews;