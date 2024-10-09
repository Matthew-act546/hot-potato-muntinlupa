import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cheese from "../assets/flavors/cheese.jpg"
import bbq from "../assets/flavors/bbq.jpg"
import sweetcorn from "../assets/flavors/sweetcorn.jpg"
import sourcream from "../assets/flavors/sourcream.jpg"
import Button from 'react-bootstrap/Button';

function About() {
    return(
        <section id='about'>
            <Container>
                <h1 className='text-center text-primary'>About</h1>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; At Hot Potato Muntinlupa, our fries are more than just crispy they’re crave-worthy! With 
                    flavors like classic cheese, bold barbecue, tangy sour & cream, and our top-selling sweet corn,
                    each bite is packed with flavor. Don’t forget to pair them with our indulgent yet balanced 
                    cheese sticks. Whether for a quick snack or a satisfying treat, Hot Potato has the perfect 
                    combo for you!
                </p>
                <Row>
                    <Col className='text-center'>
                        <p className='text-primary'><b>Cheese</b></p>
                        <div>
                            <img
                                src={cheese}  // The image file
                                alt="Hot Potato Logo"
                                width="200"
                                height="200"
                                className="block align-top"
                            />
                            
                        </div>
                        <div className='mt-3'>
                        <p className='text-left'>
                            Our Cheese flavor at Hot Potato is anything but ordinary.
                            It’s a burst of rich, creamy goodness that coats every fry, 
                            delivering a cheesy experience that’s both bold and unforgettable. 
                            Each bite is packed with intense, mouthwatering flavor that goes 
                            beyond your typical cheese making it the ultimate comfort snack 
                            that satisfies in every way.
                        </p>
                        <Button variant="primary" className='text-white'>Order Cheese!</Button>
                        </div>
                    </Col>
                    <Col>
                        <p className='text-secondary text-center'><b>Barbecue</b></p>
                        <div>
                            <img 
                                src={bbq}  
                                alt="Hot Potato Logo"
                                width="200"
                                height="200"
                                className="block justify-content-center text-center align-top"
                            />
                            
                        </div>
                        <div className='mt-3'>
                        <p className='text-justify'>
                            Our Barbeque flavor is like biting into a sizzling, freshly grilled barbecue—smoky, savory, and perfectly seasoned. 
                            The rich aroma alone is enough to make your mouth water, and with each crispy fry, you’ll enjoy a bold taste, 
                            flavorful, and drool-worthy.
                        </p>
                        <Button variant="secondary" className='text-white'>Order Barbecue!</Button>
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <p className='text-secondary'><b>Sour & Cream</b></p>
                        <div>
                            <img
                                src={sourcream}  
                                alt="Hot Potato Logo"
                                width="200"
                                height="200"
                                className="block align-top"
                            />
                            
                        </div>
                        <div className='mt-3'>
                        <p className='text-justify'>
                            Our Sour & Cream flavor is the perfect mix of smooth and tangy,
                            making each bite super tasty. With just the right balance of creaminess and a little zing, 
                            these fries will surely keep you coming back for more!
                        </p>
                        <Button variant="secondary" className='text-white'>Order Sour & Cream!</Button>
                        </div>
                    </Col>
                    <Col className='text-center'>
                    <p className='text-secondary'><b>Sweet Corn</b></p>
                        <div>
                            <img
                                src={sweetcorn}  
                                alt="Hot Potato Logo"
                                width="200"
                                height="200"
                                className="block align-top"
                            />
                            
                        </div>
                        <div className='mt-3'>
                        <p className='text-justify'>
                            Our best-selling Sweet Corn flavor is packed with amazing, mouthwatering taste. 
                            It’s so flavorful and delicious that you’ll be pleasantly surprised by how yummy each bite is!
                        </p>
                        <Button variant="secondary" className='text-white'>Order Sweet Corn</Button>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}

export default About