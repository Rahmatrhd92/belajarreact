import { Carousel } from "react-bootstrap";
import hero1 from './../assets/fly.jpg'
import hero2 from './../assets/green.jpg';
import hero3 from './../assets/pure.jpg';
import "../Style/index.css";

const Hero = () => {
    return(
        <Carousel>
                <Carousel.Item>
                <img
                    className="picture d-block w-100"
                    src={hero1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Undangan Terbang</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className=" picture d-block w-100"
                    src={hero2}
                    alt="Second slide"
                />
        
                <Carousel.Caption>
                    <h3>Cetak Undangan Saki</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="picture d-block w-100"
                    src={hero3}
                    alt="Third slide"
                />
        
                <Carousel.Caption>
                    <h3>Undangan mantap</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}

export default Hero;