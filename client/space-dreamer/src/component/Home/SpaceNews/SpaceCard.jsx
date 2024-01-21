import moment from "moment";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container } from 'react-bootstrap'
import '../../../../src/index.css'
import './SpaceCard.css'


const SpaceCard = ({ news }) => {
    console.log("NEWS", news);

    return (
        <Container>
            <p className="text-center text-dark news_box_p">SPACE NEWS BOX</p>
            <Row xs={1} md={2} lg={3}>
                {news.map((item, index) => (
                    <Col key={index} className="px-4 py-y" >
                        <Card className="h-100 card  rounded" > 
                            <Card.Img variant="top" src={item.imageUrl} alt={item.altText} className="img-fluid" />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text className="card-description">{truncateDescription(item.summary)}</Card.Text>
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

const truncateDescription = (description) => {
    // Truncate the description to a fixed number of lines (e.g., 3 lines)
    const lines = description.split('\n').slice(0, 3);
    return lines.join('\n');
  };

export default SpaceCard;