import { Carousel } from "react-bootstrap";

    function HomePage() {
        return (
            <>
            <Carousel className="container mt-3">
                <Carousel.Item interval={5000}>
                    <img src="../carros.jpg"/>
                    <Carousel.Caption>
                        <h3>Vingadores</h3>
                        <a href="/filme" className="text-light">Clique aqui para ver o review.</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                <img src="../banner5.png"/>
                    <Carousel.Caption>
                        <h3>    </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                <img src="../banner4.png"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HomePage;