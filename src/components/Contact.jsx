import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = ({ mobileView }) => {
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageSent(true);
    }

    return(
        <Container id="contact" className="contact-container">
            <Row className="justify-content-between align-items-center">
            <h1 className="gold-text contact-us-header mb-3">Contact Us</h1>
                <Col lg={6} md={10} className="m-auto">
                    <p className="contact-us-text mb-4">We welcome your questions, comments, and feedback! Please feel free to contact us using the email, phone or contact form below and our customer service team will reply within two business days.</p>
                    <div className="contact-us-text"><span className="pe-3"><MdOutlineEmail /></span>email@undercover.com</div>
                    <div className="contact-us-text"><span className="pe-3"><FaMobileAlt /></span>000-000-0000 (Customer Service)</div>
                    {mobileView && <div className="mobile-view-line"></div>}
                </Col>
                <Col lg={5} md={10} className="m-auto">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label className="visually-hidden">Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" className="py-2 form-input" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label className="visually-hidden">Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" className="py-2 form-input" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label className="visually-hidden">Message</Form.Label>
                        <Form.Control type="text" as="textarea" placeholder="Message" className="py-2 form-input" required/>
                    </Form.Group>
                    <Button className="send-btn" type="submit">SEND</Button>
                    {messageSent && <div className="py-2">Your message has been sent!</div>}
                </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;