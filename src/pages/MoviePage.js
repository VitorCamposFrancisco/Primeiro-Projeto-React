import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const MoviePage = () => {
    let [filmes, setFilme] = useState([]);

    useEffect(() => {

        async function filmes() {
            const filmes = await axios.get('http://143.198.156.185/api/filmes', {
            }).then(function (value) {
                setFilme(value.data);
            })
                .catch(function (value) {
                    console.log(value);
                });
        }
        filmes();
    });

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true
    };
    return (
        <div >
            <Container className="mt-5 mb-5 carousel">
                <Carousel className="shadow-lg  bg-body-light mb-5 rounded">
                    {filmes.map((filme, index) => (
                        <Carousel.Item key={index}>
                            <img src={filme.imagens[0].url} alt={filme.titulo} className="col-12"></img>
                            <Carousel.Caption>
                                <h3>{filme.titulo}</h3>
                                <p className="">{filme.sinopse}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
            <Container className="mt-5 position-relative shadow-lg p-1 fundo rounded">
                <h2 class="d-flex justify-content-center text-light fw-bolder">PRINCIPAIS FILMES!</h2>
            </Container>
            <Container className="mt-5">

                <Slider {...settings} className="carouselInner " >
                    {filmes.map((filme) => (
                        <div style={{ padding: '10px' }}>
                            <Link to={"/filme/" + filme.id}>
                                <Card style={{ width: '15rem', marginLeft: '10px' }} >
                                    <Card.Img variant="top" src={filme.url_thumbnail} alt={filme.titulo} />
                                </Card>
                            </Link>
                        </div>
                    ))}
                </Slider>

            </Container>
        </div >
    )
}

export default MoviePage;