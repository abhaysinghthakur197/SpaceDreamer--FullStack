import moment from "moment";
import { Link } from "react-router-dom";
import { Card, Row, Carousel, Button } from 'react-bootstrap'


const ArticleCard = ({allArticle}) => {

    console.log("getting articles",allArticle)

     return (
        <div className='container'>
                <Carousel controls={false} indicators={false}>
                    {allArticle.map((item, index) => (
                        <Carousel.Item key={item._id}>
                            <Row className="g-0" xs={1} md={2} lg={3}>
                                <Card style={{width: "22rem"}} className='border-warning border-5 bg-dark'>
                                    <Card.Img variant="top" src={item.coverImageURL} />
                                    <Card.Body>
                                        <Card.Title className="font-weight-bold text-white" style={{ fontSize: '24px' }}>
                                            {item.title}
                                        </Card.Title>
                                        <Card.Text className="text-white">
                                            {item.body}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style={{width: "22rem"}} className='border-warning border-5 dg-dark' >
                                    <Card.Img variant="top" src={item.coverImageURL} />
                                    <Card.Body>
                                        <Card.Title className="font-weight-bold " style={{ fontSize: '24px' }}>
                                            {item.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {item.body}
                                        </Card.Text>
                                        <Button variant='outline-light' className='mx-1 my-1' > View </Button>
                                    </Card.Body>
                                </Card>
                            </Row>
                         </Carousel.Item>
                    ))}
                </Carousel>
            </div>
     )


} 

export default ArticleCard;