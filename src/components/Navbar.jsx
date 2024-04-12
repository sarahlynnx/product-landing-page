import React, {useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';
import CartView from './CartView';
import ScrollSpyNav from "react-scrollspy-nav";
import { MdClose } from "react-icons/md"; 
import flavorImages from './FlavorImages';


const NavMenu = ({showCart, setShowCart, cartItems, setCartItems, handleFlavorSelect, selectedCategory}) => {
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [collapsed, setCollapsed] = useState(true);

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

    const handleCheckout = () => {
        setCartItems([]);
        setShowCart(false);
        alert('You checked out!');
    }

    const handleMenuOverlay = () => {
        setCollapsed(!collapsed);
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

    return (
            <Navbar expand='false' collapseOnSelect className='mx-3' fixed='top'>
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
                                handleCheckout={handleCheckout}
                            />
                        }
                    </Nav>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' className='custom-toggler' onClick={handleMenuOverlay}>
                        {!collapsed && <MdClose style={{width: '30px', height: '30px'}} />}
                    </Navbar.Toggle>
                </div>
                <Navbar.Collapse id='basic-navbar-nav' className='custom-navbar-collapse' style={{display: collapsed ? 'none' : 'flex', background: '#232025', transition: 'none' }}>
                    {!collapsed && (<>
                        <div><h1 className='nav-header'>menu</h1></div>
                        <div className='main-nav'>
                            <ScrollSpyNav scrollTargetIds={['about', 'faqs', 'contact']} offset={-120}>
                                <Nav>
                                    <Nav.Link href='#about' onClick={handleMenuOverlay}>About</Nav.Link>
                                    <Nav.Link href='#faqs' onClick={handleMenuOverlay}>FAQs</Nav.Link>
                                    <Nav.Link href='#contact' onClick={handleMenuOverlay}>Contact</Nav.Link>
                                </Nav>
                            </ScrollSpyNav>
                        </div>
                        <div className='overlay-product-nav'>
                            <Nav className='product-nav justify-content-between'>
                                <NavDropdown 
                                    title={<span className={selectedCategory === 'DARK CHOCOLATE' ? 'gold-text' : '' }>DARK CHOCOLATE</span>} 
                                    id='dark-chocolate-dropdown'
                                >
                                    {Object.entries(flavorImages['DARK CHOCOLATE']).map(([flavor, data]) => (
                                        <NavDropdown.Item 
                                            key={flavor} 
                                            onClick={() => {
                                                handleFlavorSelect(
                                                flavor, 
                                                'DARK CHOCOLATE', 
                                                data.images || [], 
                                                data.backgroundGradient, 
                                                data.description, 
                                                data.ingredients, 
                                                data.price, 
                                                data.warning, 
                                                data.contents
                                                );
                                                handleMenuOverlay();
                                            }}
                                        >
                                            {flavor}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                                <NavDropdown 
                                    title={<span className={selectedCategory === 'MINI CRISPS' ? 'gold-text' : '' }>MINI CRISPS</span>} 
                                    id='mini-crisps-dropdown'
                                >
                                    {Object.entries(flavorImages['MINI CRISPS']).map(([flavor, data]) => (
                                        <NavDropdown.Item 
                                            key={flavor} 
                                            onClick={() => {
                                                handleFlavorSelect(
                                                    flavor, 
                                                    'MINI CRISPS', 
                                                    data.images || [], 
                                                    data.backgroundGradient, 
                                                    data.description, 
                                                    data.ingredients, 
                                                    data.price, 
                                                    data.warning, 
                                                    data.contents
                                                    );
                                                handleMenuOverlay();
                                            }}
                                        >
                                            {flavor}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                                <NavDropdown 
                                    title={<span className={selectedCategory === 'MILK CHOCOLATE' ? 'gold-text' : '' }>MILK CHOCOLATE</span>} 
                                    id='milk-chocolate-dropdown'
                                >
                                    {Object.entries(flavorImages['MILK CHOCOLATE']).map(([flavor, data]) => (
                                        <NavDropdown.Item 
                                            key={flavor} 
                                            onClick={() => {
                                                handleFlavorSelect(
                                                    flavor, 
                                                    'MILK CHOCOLATE', 
                                                    data.images || [], 
                                                    data.backgroundGradient, 
                                                    data.description, 
                                                    data.ingredients, 
                                                    data.price, 
                                                    data.warning, 
                                                    data.contents
                                                );
                                                handleMenuOverlay();
                                            }}
                                        >
                                            {flavor}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                                <NavDropdown 
                                    title={<span className={selectedCategory === 'SAMPLER PACKS' ? 'gold-text' : '' }>SAMPLER PACKS</span>} 
                                    id='sampler-packs-dropdown'
                                >
                                    {Object.entries(flavorImages['SAMPLER PACKS']).map(([flavor, data]) => (
                                        <NavDropdown.Item 
                                            key={flavor} 
                                            onClick={() => {
                                                handleFlavorSelect(
                                                    flavor, 
                                                    'SAMPLER PACKS', 
                                                    data.images || [], 
                                                    data.backgroundGradient, 
                                                    data.description, 
                                                    data.ingredients, 
                                                    data.price, 
                                                    data.warning, 
                                                    data.contents
                                                );
                                                handleMenuOverlay();
                                            }}
                                        >
                                            {flavor}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            </Nav>
                        </div>
                    </>)}
                </Navbar.Collapse>
            </Navbar>
        );
}

export default NavMenu;