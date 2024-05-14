import { Carousel } from "react-bootstrap";
import '../Styles/custom.css';
import Slider from "react-slick";   

function HomePage() {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };
    return (
        <div className="container mt-4">
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src={"../oppenheimer.jpg"} />
                    </div>
                    <div>
                        <img src={"../carros.jpg"} />
                    </div>
                    <div>
                        <img src={"../deadpool.jpeg"} />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default HomePage;