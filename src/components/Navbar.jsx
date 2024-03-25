import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import CartView from './CartView';

const NavMenu = ({showCart, setShowCart, cartItems, setCartItems}) => {
    //modify nav collapse menu to be full page 
    return (
        <div style={{position: 'relative'}}>
        <Navbar fixed="top" expand='false'>
            <Container fluid className='mx-3'>
            <Navbar.Brand href="#home">
            <Logo />
            </Navbar.Brand>
            <div className="d-flex flex-row align-items-center justify-content-between" style={{width: '150px'}}>
                <Nav>
                    <Nav.Link onClick={() => setShowCart(!showCart)}>CART</Nav.Link>
                    {showCart && <CartView className='cart-modal' cartItems={cartItems} setCartItems={setCartItems} onHide={() => setShowCart(false)}/>}
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#faqs">FAQs</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default NavMenu;