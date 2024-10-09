import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import homeImage from '../assets/flavors/home.png';
import '../styles/sections/_home.scss';


function Home () {
    return (
        <section id="home">
            <Container>
                <Row className='row-main'>
                    <Col s={12} md={6} lg={6} className='order-md-1 order-2 order-sm-2 '>
                        <div className="d-flex align-items-center home-hero1">
                            <div className="mx-auto">
                                <h1 className='text-primary display--1'>Hot potato</h1>
                                <h6>"Not your ordinary fries"</h6>
                                <p>
                                    Hot Potato is your go-to snack spot at Caps Foodpark, near Montessori School. 
                                    We serve delicious fries in unique flavors and tasty cheese sticks that will satisfy your cravings!
                                </p>
                                <Button variant="primary" className='text-white'>Check our menu</Button>{' '}
                            </div>
                        </div>
                    </Col>
                    <Col xs={2} md={4} lg={6} className='home-hero2 order-md-2 order-1 order-sm-1'>
                        <div className="row row2">
                            <div className='col-md-8 col-12 '>
                                <img
                                    src={homeImage} 
                                    alt="Home image model 1"
                                    className='home-img'
                                    />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;