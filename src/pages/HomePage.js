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

    const reduceCards = (acc, cur, index) => {
        const groupIndex = Math.floor(index / 4);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(cur);
        console.log(acc);
        return acc;
    };


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
            <Container>
                <Carousel className="shadow-lg  bg-body-light mb-5 rounded">
                    {filmes.reduce(reduceCards, []).map((item, index) => (
                        <Carousel.Item key={index}>
                            {item.map((filme, index) => (
                                <Card style={{ width: '17rem' }}>
                                    <img src={filme.imagens[2]} alt={filme.titulo} className="col-12"></img>
                                    <Carousel.Caption>
                                        <h3>{filme.title}</h3>
                                        <p>{filme.sinopse}</p>
                                    </Carousel.Caption>
                                </Card>
                            ))}

                        </Carousel.Item>
                    ))}
                </Carousel>
                <Container className="mt-5 position-relative shadow-lg p-1 fundo rounded">
                    <h2 class="d-flex justify-content-center text-light fw-light">LIVROS</h2>
                </Container>
                <Carousel className="ms-3 mt-5 carrosel">
                    <Carousel.Item>
                        <Row>
                            {filmes.map((filme, index) => (
                                <Col sm>
                                    <div >
                                        <Card style={{ width: '17rem' }}>
                                            <Card.Img variant="top" src={filme.url_thumbnail} alt={filme.titulo} className="col-12" />
                                            <Card.Body>
                                                <Card.Title>{filme.title}</Card.Title>
                                                <Card.Text>
                                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                                </Card.Text>
                                                <div className="verFilmes">
                                                    <Button className="verFilmes" variant="primary">Ver filme</Button></div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>

                </Carousel>
            </Container>
        </div>
    )
}

export default HomePage;