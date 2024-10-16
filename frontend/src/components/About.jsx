import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cheese from "../assets/flavors/cheese.jpg"
import bbq from "../assets/flavors/bbq.jpg"
import sweetcorn from "../assets/flavors/sweetcorn.jpg"
import sourcream from "../assets/flavors/sourcream.jpg"
import Button from 'react-bootstrap/Button';
import '../styles/sections/_about.scss';
import Carousel from 'react-bootstrap/Carousel';

function About() {
    return(
        <section id='about'>
            <Container>
                <h1 className='text-center text-primary display--1 about-title'>About</h1>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; At Hot Potato Muntinlupa, our fries are more than just crispy they’re crave-worthy! With 
                    flavors like classic <span className='text-primary'>cheese</span>, bold <span className='text-secondary'>barbecue</span>, tangy <span className='text-sourc'>sour & cream</span>, and our top-selling <span className='text-sweetc'>sweet corn</span>,
                    each bite is packed with flavor. Don’t forget to pair them with our indulgent yet balanced 
                    cheese sticks. Whether for a quick snack or a satisfying treat, Hot Potato has the perfect 
                    combo for you!
                </p>
                <Carousel className='custom-carousel' data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                        className='w-100 d-block'
                        src={cheese}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src={bbq}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src={sweetcorn}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src={sourcream}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>

                <Container>
                    <Row>
                        <Col>About us 

                        </Col>
                        <Col>Mission</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default About