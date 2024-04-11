import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const FAQs = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    const [data, setData] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        }
        
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Fetching FAQ data from JSON file
        const fetchData = async () => {
            try {
                const response = await fetch('ProductLandingPage/data/faqs.json', {
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchData();
    }, []);

    const CustomToggle = ({ children, eventKey }) => {
        const decoratedOnClick = useAccordionButton(eventKey);

        return (
            <div
                className="faq-button"
                style={
                    (eventKey === "0" || eventKey === "4" || eventKey === "7") && isMobileView 
                    ? { marginTop: '0', marginBottom: '10px' } 
                    : { marginTop: '20px', marginBottom: '0' }
                }
                onClick={decoratedOnClick}
            >
                {children}
            </div>
        )
    }

    return (
        <Container className="faqs-container" id="faqs">
            <h1 className="faqs-header gold-text">FAQs</h1>
            <Accordion>
                {data && data.map((item, index) => (
                    <Card key={index}>
                        <Card.Header className="card-header">
                            <CustomToggle eventKey={index.toString()}>
                                {item.question}
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={index.toString()}>
                            <Card.Body>
                                {item.answer}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </Container>
    )
}

export default FAQs;
