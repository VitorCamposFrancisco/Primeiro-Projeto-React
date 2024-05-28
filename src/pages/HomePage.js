import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import '../Styles/custom.css';
import { useEffect, useState } from 'react';
import axios from "axios";
const HomePage = () => {
    let [filmes, setFilme] = useState([]);

    useEffect(() => {

        async function filmesLivros() {
            const filmes = await axios.get('http://143.198.156.185/api/home', {
            }).then(function (value) {
                setFilme(value.data);
            })
                .catch(function (value) {
                    console.log(value);
                });
        }
        filmesLivros();
    });

    return (
        <div >
            <Container className="mt-5 mb-5 carousel">
                <Carousel s className="shadow-lg  bg-body-light mb-5 rounded">
                    {filmes.map((filme, index) => (
                        <Carousel.Item>
                            <img src={filme.imagens[2]} alt={filme.titulo} className="col-12"></img>
                            <Carousel.Caption>
                                <h3>{filme.title}</h3>
                                <p>{filme.sinopse}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
            <Container className="mt-5 position-relative shadow-lg p-1 fundo rounded">
                <h2 class="d-flex justify-content-center text-light fw-light">FILMES</h2>
            </Container>
            <Carousel s className="ms-3 mt-5 carrosel">
                {filmes.map((filme, index) => (
                    <Carousel.Item>
                        <Row>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '17rem' }}>
                                        <Card.Img variant="top" src={filme.url_thumbnail} alt={filme.titulo} className="col-12" />
                                        <Card.Body>
                                            <Card.Title>{filme.title}</Card.Title>
                                            <Card.Text>
                                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                            </Card.Text>
                                            <div className="verFilmes"></div>
                                            <Button className="verFilmes" variant="primary">Ver filme</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}

            </Carousel>
            <Container className="mt-5 position-relative shadow-lg p-1 fundo rounded">
                <h2 class="d-flex justify-content-center text-light fw-light">LIVROS</h2>
            </Container>
            <Carousel s className="ms-3 mt-5 carrosel">
                {filmes.map((filme, index) => (
                    <Carousel.Item>
                        <Row>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '17rem' }}>
                                        <Card.Img variant="top" src={filme.url_thumbnail} alt={filme.titulo} className="col-12" />
                                        <Card.Body>
                                            <Card.Title>{filme.title}</Card.Title>
                                            <Card.Text>
                                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                            </Card.Text>
                                            <Button variant="primary">Ver filme</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '17rem' }}>
                                        <Card.Img variant="top" src={filme.url_thumbnail} alt={filme.titulo} className="col-12" />
                                        <Card.Body>
                                            <Card.Title>{filme.title}</Card.Title>
                                            <Card.Text>
                                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                            </Card.Text>
                                            <Button variant="primary">Ver filme</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '17rem' }}>
                                        <Card.Img variant="top" src={filme.imagens[2]} alt={filme.titulo} className="col-12" />
                                        <Card.Body>
                                            <Card.Title>{filme.title}</Card.Title>
                                            <Card.Text>
                                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                            </Card.Text>
                                            <Button variant="primary">Ver filme</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '17rem' }}>
                                        <Card.Img variant="top" src={filme.url_thumbnail} alt={filme.titulo} className="col-12" />
                                        <Card.Body>
                                            <Card.Title>{filme.title}</Card.Title>
                                            <Card.Text>
                                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                            </Card.Text>
                                            <Button variant="primary">Ver filme</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '17rem' }}>
                                        <Card.Img variant="top" src={filme.url_thumbnail} alt={filme.titulo} className="col-12" />
                                        <Card.Body>
                                            <Card.Title>{filme.title}</Card.Title>
                                            <Card.Text>
                                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                            </Card.Text>
                                            <Button variant="primary">Ver filme</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div >
                                    <Card style={{ width: '17rem' }}>
                                        <Card.Img variant="top" src={filme.imagens[2]} alt={filme.titulo} className="col-12" />
                                        <Card.Body>
                                            <Card.Title>{filme.title}</Card.Title>
                                            <Card.Text>
                                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                            </Card.Text>
                                            <Button variant="primary">Ver filme</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}

            </Carousel>
        </div>
    )
}

export default HomePage;