import React, {useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import CartView from './CartView';

const NavMenu = ({showCart, setShowCart, cartItems, setCartItems}) => {
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const removeFromCart = (indexToRemove) => {
        const updatedCartItems = cartItems.filter((item, index) => index !== indexToRemove);
        setCartItems(updatedCartItems);
      };

    const decrementQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity -= 1;  
            setCartItems(updatedCartItems);
        }
    }

    const incrementQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity += 1;
        setCartItems(updatedCartItems);
    }

      useEffect(() => {
        let subtotal = 0;
        let quantity = 0;
        cartItems.forEach((item) => {
          subtotal += item.price * item.quantity;
          quantity += item.quantity;
        });
        subtotal = parseFloat(subtotal.toFixed(2))
        setCartSubtotal(subtotal);
        setTotalQuantity(quantity);
      }, [cartItems]);

    //modify nav collapse menu to be full page 
    return (
            <Navbar expand='false' className='mx-3'>
                <Navbar.Brand href="#home">
                <Logo />
                </Navbar.Brand>
                <div 
                    className='d-flex flex-row align-items-center justify-content-between'
                    style={{width: '150px'}}
                >
                    <Nav>
                        <Nav.Link 
                            onClick={() => setShowCart(!showCart)} 
                            role='button' 
                            aria-haspopup='dialog'
                        >
                            CART
                            <span className='cart-quantity'>
                                {totalQuantity}
                            </span>
                        </Nav.Link>
                        {showCart && 
                            <CartView 
                                className='cart-modal' 
                                cartItems={cartItems} 
                                setCartItems={setCartItems} 
                                onHide={() => setShowCart(false)} 
                                removeFromCart={removeFromCart} 
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                                cartSubtotal={cartSubtotal} 
                            />
                        }
                    </Nav>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                </div>
                    <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#faqs'>FAQs</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
        );
}

export default NavMenu;