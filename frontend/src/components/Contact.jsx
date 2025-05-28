import '../styles/sections/_contacts.scss';
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <section className='p-4' id='contacts'>
            <h1 className='display--1 text-white text-center pb-3'>Contact</h1>
            <Container>
                <div className='text-white text-center mb-4'>
                    <h2 className='display--2 text-white mb-3'>Reach us!</h2>
                    <div className='contact-icons-parent justify-content-center'>
                        <span className='contact-icons text-black'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-white' />
                        </span>
                        <br /> 
                        <span className='contact-icons text-black'>
                            <FontAwesomeIcon icon={faFacebook} className='text-white'/>
                        </span>
                        <br />
                        <span className='contact-icons text-black'>
                            <FontAwesomeIcon icon={faPhone} className='text-white'/>
                        </span> 09268883090 (Smart)
                    </div>
                </div>
                <h2 className='display--2 mb-2 text-white text-center'>Cap&apos;s Foodpark Map</h2>
                        <p className='text-white text-center'>Location: 
                        #7 Katihan Poblacion, Muntinlupa City @ <br />Caps Foodpark & Garden
                        (Near southernside montrssori)</p>
                        <div className='contact-map d-flex justify-content-center'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.691265109292!2d121.03405875757322!3d14.387266189140194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d17ddfee476b%3A0xe60d92e370b991b1!2sCap%27s%20Foodpark!5e0!3m2!1sen!2sph!4v1729582943445!5m2!1sen!2sph"
                                width="350"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Cap's Foodpark Map">
                            </iframe>
                            
                        </div>
            </Container>    
        </section>
    )
}

export default Contact