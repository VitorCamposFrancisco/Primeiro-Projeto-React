import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import '../Styles/custom.css';
import Slider from "react-slick";
import { useState } from 'react';

function HomePage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div >
            <Container className="mt-4">
                <Carousel >
                    <Carousel.Item>
                        <img src="../oppenheimer.jpg" className="col-12"></img>
                        <Carousel.Caption>
                            <h3>Oppenheimer</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../carros.jpg" className="col-12"></img>
                        <Carousel.Caption>
                            <h3>Carros 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../kong.jpg" className="col-12"></img>
                        <Carousel.Caption>
                            <h3>Godzilla vs Kong: O Novo Império.</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container>
                <Carousel activeIndex={index} onSelect={handleSelect} className="ms-3 mt-5">
                    <Carousel.Item>
                        <Row>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="../kong-P.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="../kong-P.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="../kong-P.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="../kong-P.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col sm>
                                <div>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="../kong-P.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="../kong-P.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="../kong-P.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="../kong-P.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="../kong-P.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="../kong-P.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default HomePage;