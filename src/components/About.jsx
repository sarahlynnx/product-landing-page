import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pouches from '../images/pouches.svg';


const About = ({titleBackground, mobileView}) => {
    return(
        <Container id='about'>
            <Row className='about-pouches d-flex flex-row justify-content-center align-items-center px-3' style={{background: titleBackground}}>
                {!mobileView && ( 
                <Col className='d-flex' lg={6} md={10}>
                    <Image src={pouches} alt='stand-up pouches' className='pouches-img m-auto'/>
                </Col>
                )}
                <Col lg={6} md={10} className='d-flex stand-up-pouches'>
                    <div className='m-auto'>
                        <h2 className='mobile-size bold-text'>STAND-UP POUCHES</h2>
                        <h4>Packages of Chocolate Quinoa Crisps</h4>
                        <p className='about-pouches-text'>
                            Light, Crispy, Crunchy and Incredibly Delicious! At UNDERCOVER, 
                            we are passionate about creating delicious better-for-you snacks made from simple, allergy-friendly ingredients. 
                            We start with crispy quinoa because it is naturally gluten-free, full of protein, fiber and nutrients, 
                            and has an <span className='bold-text'>INCREDIBLE CRUNCHY TEXTURE</span>. Then we add all-natural inclusions for a little pizazz, 
                            and cover it up with <span className='bold-text'>PREMIUM DARK or MILK CHOCOLATE</span>! 
                            With the perfect chocolate-to-crunch ratio, your taste buds will thank you! 
                            Available in 8-packs of 2-ounce pouches or try the Mini Crisps available in 7-packs of 3-ounce pouches!
                        </p>
                    </div>
                </Col>
                {mobileView && ( 
                <Col className='d-flex' lg={6} md={10}>
                    <Image src={pouches} alt='stand-up pouches' className='pouches-img m-auto'/>
                </Col>
                )}
            </Row>
            <Row className='more-reasons d-flex flex-row justify-content-center align-items-center gy-3 pb-5'>
                <Col lg={6} md={10} className='d-flex'>
                    <div className='m-auto' style={{width: '450px'}}>
                    <h2 className='pb-3 gold-text'>More Reasons to Love Our Crisps:</h2>
                    <ul className='more-reasons-list'>
                        <li>Certified Gluten-Free, Peanut Free, Tree Nut Free</li>
                        <li>School Safe and Allergen Friendly</li>
                        <li>All-Natural, Non-GMO Project Verified, Rain Forest Alliance Certified Chocolate, Certified Kosher</li>
                        <li>Healthy, Simple Ingredients, Packed With Protein, Fiber and Nutrients</li>
                        <li>WBENC-Certified Woman-Owned Business</li>
                        <li>Proudly Made in the USA at Our Own SQF Production Facility (The Top Certification for Food Safety and Quality)</li>
                    </ul>
                    </div>
                </Col>
                <Col className='d-flex' lg={6} md={10}>
                    <div className='m-auto pt-4'>
                        <h1 className='more-reasons-text'>light</h1>
                        <h1 className='more-reasons-text' style={{textAlign: 'center'}}>crispy</h1>
                        <h1 className='more-reasons-text'>crunchy</h1>
                        <h1 className='delicious' style={{backgroundImage: titleBackground, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', textAlign: 'center'}}>Delicious</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;