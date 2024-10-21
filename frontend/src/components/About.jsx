import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/sections/_about.scss';

function About() {
    return(
        <section id='about'>
            <Container>
                <h1 className='text-center text-primary display--1 about-title'>About</h1>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; At Hot Potato Muntinlupa, our fries are more than just crispy they’re crave-worthy! With 
                    flavors like classic <b><span className='text-primary'>Cheese</span></b>, bold <b><span className='text-secondary'>Barbecue</span></b>, tangy <b><span className='text-sourc'>Sour & Cream</span></b>, and our top-selling <b><span className='text-sweetc'>Sweet Corn</span></b>,
                    each bite is packed with flavor. Don’t forget to pair them with our indulgent yet balanced 
                    cheese sticks. Whether for a quick snack or a satisfying treat, Hot Potato has the perfect 
                    combo for you!
                </p>

                <Container>
                    <Row className='gap-4'>
                        <Col className='about-col'>
                            <p className='display--2 text-center'>About us </p>
                            <div className='about-hr'> </div>
                            <div className='about-container'>
                                
                                <div>
                                    <img src="https://placehold.co/200" className='mx-auto d-block about-img'  alt="picture of hot potato muntinlupa" />
                                </div>
                                <div className='text-justify about-paragraph'>
                                    <p>Hot Potato in Muntinlupa, opened on July 22, 2024, is owned by Sheryl Anne Cabance and managed by Lheslie C. Fernandez. Located at Cap's Foodpark near SMS Montessori, it is known for its crispy fries and the tagline "Not your ordinary fries."</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='about-col'>
                            <p className='display--2 text-center'>Mission </p>
                            <div className='about-hr'> </div>
                            <div className='about-container'>
                                <div>
                                    <img src="https://placehold.co/200" className='mx-auto d-block about-img'  alt="picture of mission" />
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
                        <Col className='about-col'>
                            <p className='display--2 text-center'>Vision </p>
                            <div className='about-hr'> </div>
                            <div className='about-container'>
                                
                                <div>
                                    <img src="https://placehold.co/200" className='mx-auto d-block about-img'  alt="picture of mission" />
                                </div>
                                <div className='text-justify about-paragraph'>
                                    <p>The values of Hot Potato are centered on "Quality First," ensuring freshly cooked fries made from top-quality ingredients, and "Customer Satisfaction," prioritizing a delightful and satisfying experience for every customer.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div style={{height: 50}}></div>
                </Container>
            </Container>
        </section>
    )
}

export default About