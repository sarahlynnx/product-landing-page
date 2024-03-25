import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import CartView from './CartView';

const NavMenu = ({showCart, setShowCart, cartItems, setCartItems}) => {
    const [cartSubtotal, setCartSubtotal] = useState(0);

    const removeFromCart = (indexToRemove) => {
        const updatedCartItems = cartItems.filter((item, index) => index !== indexToRemove);
        setCartItems(updatedCartItems);
      };

      useEffect(() => {
        let subtotal = 0;
        cartItems.forEach((item) => {
          subtotal += item.price * item.quantity;
        });
        subtotal = parseFloat(subtotal.toFixed(2))
        setCartSubtotal(subtotal);
      }, [cartItems]);

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
                    {showCart && 
                        <CartView 
                            className='cart-modal' 
                            cartItems={cartItems} 
                            setCartItems={setCartItems} 
                            onHide={() => setShowCart(false)} 
                            removeFromCart={removeFromCart} 
                            cartSubtotal={cartSubtotal} 
                        />
                    }
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