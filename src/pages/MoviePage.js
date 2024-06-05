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
                            <Link class="link-offset-2 link-underline link-underline-opacity-0" to={"/filme/" + filme.id}>
                                <Card className="border border-0" style={{ width: '15rem', marginLeft: '10px' }} >
                                    <div className="card-body bg-black text-danger text-center">
                                        <h2 class=" card-title  fw-bold fs-5 text  mb-3">{filme.titulo} </h2>
                                    </div>
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