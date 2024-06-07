import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BookPage = () => {
    let [livro, setLivro] = useState([]);

    useEffect(() => {

        async function livros() {
            const livros = await axios.get('http://143.198.156.185/api/livros', {
            }).then(function (value) {
                setLivro(value.data);
            })
                .catch(function (value) {
                    console.log(value);
                });
        }
        livros();
    });

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
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
                    {livro.map((livro, index) => (
                        <Carousel.Item key={index}>
                            <img src={livro.imagens[0].url} alt={livro.titulo} className="col-12"></img>
                            <Carousel.Caption>
                                <h3>{livro.titulo}</h3>
                                <p className="">{livro.sinopse}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
            <Container className="mt-5 position-relative shadow-lg p-1 fundo rounded">
                <h2 class="d-flex justify-content-center text-light fw-bolder">PRINCIPAIS LIVROS!</h2>
            </Container>
            <Container className="mt-5">

                <Slider {...settings} className="carouselInner" >
                    {livro.map((livro) => (
                        <div style={{ padding: '10px' }}>
                            <Link class="link-offset-2 link-underline link-underline-opacity-0" to={"/livro/" + livro.id}>
                                <Card className="border border-0" style={{ width: '15rem', marginLeft: '10px' }} >
                                    <div className="card-body bg-black text-danger text-center">
                                        <h2 class=" card-title  fw-bold fs-5 text  mb-3">{livro.titulo} </h2>
                                    </div>
                                    <Card.Img variant="top" class="rounded" src={livro.url_thumbnail} alt={livro.titulo} />
                                </Card>
                            </Link>
                        </div>
                    ))}
                </Slider>

            </Container>
        </div >
    )
}


export default BookPage;