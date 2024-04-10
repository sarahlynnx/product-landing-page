import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const FAQs = () => {
const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobileView(true);
            } else {
                setIsMobileView(false);
            }
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsMobileView]);

const CustomToggle = ({children, eventKey}) => {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <div
            className="faq-button"
            as="div"
            type="button"
            variant="link"
            onClick={decoratedOnClick}
            style={
                (eventKey === "0" || eventKey === "5") && isMobileView ? {
                    marginTop: '0', marginBottom: '10px'
                } : {marginTop: '20px', marginBottom: '0'}
              }
        >
            {children}
        </div>
    )
}
    return(
        <Container className="mb-5">
            <h1 className="faqs-header gold-text">FAQs</h1>
            <Accordion>
                <Card>
                    <Card.Header className="card-header">
                        <CustomToggle eventKey="0">
                        What percentage is the chocolate in your dark chocolate flavors?
                        </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    It is 64% chocolate, but because we use a relatively small ratio of chocolate to quinoa, 
                    the sugar per serving is much lower than you would find in a typical dark chocolate product that is 64% chocolate. 
                    In fact, one serving of our Dark Chocolate & Sea Salt Crisps only has 6g of sugar.               
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <CustomToggle eventKey="1">
                        Is your product vegan?
                        </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    No, it is not certified vegan, but we use all plant-based ingredients 
                    in our dark chocolate flavors. The reason our products are not certified vegan is 
                    because we use cane sugar and cannot verify that the cane sugar is not processed with bone char.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card> 
                <Card>
                    <Card.Header>
                        <CustomToggle eventKey="2">
                        Where is the quinoa from?
                        </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    We source our quinoa from Bolivia, the United States, and Canada.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card> 
                <Card>
                    <Card.Header>
                        <CustomToggle eventKey="3">
                        How is the quinoa crisped?
                        </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    It is not crisped using any oil or other ingredients. 
                    It is cooked at high temperatures and toasted, not extruded. 
                    Because we do not extrude our quinoa, we preserve a great deal of the fiber, protein, 
                    and nutrients, as compared to similarly crisped products.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card> 
                <Card>
                    <Card.Header>
                        <CustomToggle eventKey="4">
                        Are your products sustainable?
                        </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                    Our products are Rainforest Alliance-certified because we care a great deal about sustainability. 
                    We also manufacture our products in a facility that is powered with solar energy.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card> 
                <Card>
                    <Card.Header>
                        <CustomToggle eventKey="5">
                        Is your facility a dedicated tree nut, peanut, and gluten free facility?
                        </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>
                    Yes, we operate out of our own manufacturing facility which is completely 
                    free from all tree nuts, peanuts, and all other products containing gluten.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card> 
                <Card>
                    <Card.Header>
                        <CustomToggle eventKey="6">
                        Are your products certified kosher?
                        </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body>
                    Yes, our products are Kosher-certified (OU-D). They are certified OU-Dairy because 
                    our dark chocolate flavors and milk chocolate flavors are produced on shared equipment. 
                    </Card.Body>
                    </Accordion.Collapse>
                </Card> 
            </Accordion>
        </Container>
    )
}

export default FAQs;