import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import '../Styles/custom.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import Slider from "react-slick";
const HomePage = () => {
    let [filmes, setFilme] = useState([]);
    let [livros, setLivros] = useState([]);
    let [filmeslivros, setFilmesLivros] = useState([]);

    useEffect(() => {

        async function filmesLivros() {
            const filmes = await axios.get('http://143.198.156.185/api/home', {
            }).then(function (value) {
                setFilmesLivros(value.data);
            })
                .catch(function (value) {
                    console.log(value);
                });
        }

        async function filmes() {
            const filmes = await axios.get('http://143.198.156.185/api/filmes', {
            }).then(function (value) {
                setFilme(value.data);
            })
                .catch(function (value) {
                    console.log(value);
                });
        }

        async function Livros() {
            const livros = await axios.get('http://143.198.156.185/api/livros', {
            }).then(function (value) {
                setLivros(value.data);
            })
                .catch(function (value) {
                    console.log(value);
                });
        }
        filmes();
        Livros();
        filmesLivros();
    });

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            }
          ]
    };

    return (
        <div >
            <Container className="mt-5 mb-5 carousel">
                <Carousel s className="shadow-lg  bg-body-light mb-5 rounded">
                    {filmes.map((filme, index) => (
                        <Carousel.Item key={index}>
                            <img src={filme.imagens[1].url} alt={filme.titulo} className="col-12"></img>
                            <Carousel.Caption>
                                <h3>{filme.titulo}</h3>
                                <p className="">{filme.sinopse}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
            <Container className="mt-5 position-relative shadow-lg p-1 fundo rounded">
                <h2 class="d-flex justify-content-center text-light fw-bolder">O que há de melhor por aqui!</h2>
            </Container>
            <Container className="mt-5">

                <Slider {...settings} className="carouselInner " >
                        {filmeslivros.map((filme) => (
                            <div style={{padding: '10px'}}>
                                <Card style={{ width: '15rem', marginLeft: '10px' }} >
                                <Card.Img variant="top" src={filme.url_thumbnail} alt={filme.titulo} />
                            </Card>
                            </div>
                        ))}
                </Slider>

            </Container>
        </div >
    )
}

export default HomePage;