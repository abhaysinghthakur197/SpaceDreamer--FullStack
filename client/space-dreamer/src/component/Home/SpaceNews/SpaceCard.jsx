import moment from "moment";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container } from 'react-bootstrap'
import '../../../../src/index.css'


const SpaceCard = ({ news }) => {
    console.log("NEWS", news);

    return (
        <Container>
            <p className="text-center text-dark news_box_p">SPACE NEWS BOX</p>
            <Row xs={1} md={2} lg={3} className="g-4">
                {news.map((item, index) => (
                    <Col>
                        <Card key={index}>
                            <Card.Img variant="top" src={item.imageUrl} alt={item.altText} className="img-fluid" />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.summary}</Card.Text>
                                <Card.Text>{moment(item.publishedAt).format("dddd, MMMM Do, YYYY")}</Card.Text>
                                
                                    <button variant="danger">{item.newsSite}</button>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default SpaceCard;