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

                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className='about-container'>
                                <p className='display--2 text-center'>About us </p>
                                <div className=''>
                                    <img src="https://placehold.co/200" className='mx-auto d-block'  alt="picture of hot potato muntinlupa" />
                                </div>
                                <div className='text-justify about-paragraph'>
                                    <p>Hot Potato in Muntinlupa, opened on July 22, 2024, is owned by Sheryl Anne Cabance and managed by Lheslie C. Fernandez. Located at Cap's Foodpark near SMS Montessori, it is known for its crispy fries and the tagline "Not your ordinary fries."</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='about-container'>
                                <p className='display--2 text-center'>Mission </p>
                                <div className=''>
                                    <img src="https://placehold.co/200" className='mx-auto d-block'  alt="picture of mission" />
                                </div>
                                <div className='text-justify about-paragraph'>
                                    <p>
                                        Our mission at Hot Potato Muntinlupa is to satisfy cravings by offering delicious, high-quality fries in a variety of 
                                        exciting flavors. We are committed to delivering an unforgettable snacking experience with every 
                                        bite, ensuring that each customer leaves feeling happy and satisfied.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='about-container'>
                                <p className='display--2 text-center'>Vision </p>
                                <div className=''>
                                    <img src="https://placehold.co/200" className='mx-auto d-block'  alt="picture of mission" />
                                </div>
                                <div className='text-justify about-paragraph'>
                                    <p>The values of Hot Potato are centered on "Quality First," ensuring freshly cooked fries made from top-quality ingredients, and "Customer Satisfaction," prioritizing a delightful and satisfying experience for every customer.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div style={{height: 300}}></div>
                </Container>
            </Container>
        </section>
    )
}

export default About