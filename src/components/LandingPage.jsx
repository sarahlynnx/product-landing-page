import React, {useState} from 'react';
import NavMenu from './Navbar';
import Shop from './Shop';
import About from './About';

const LandingPage = () => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [titleBackground, setTitleBackground] = useState('-webkit-linear-gradient(180deg, #89d1ee 5%, #47a6cb 53%, #006e99 91%)');
    return (
        <div>
            <NavMenu 
                showCart={showCart} 
                setShowCart={setShowCart} 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
            />
            <Shop 
                showCart={showCart} 
                setShowCart={setShowCart} 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
                titleBackground={titleBackground}
                setTitleBackground={setTitleBackground}  
            />
            <About 
                titleBackground={titleBackground}
            />
        </div>
    );
}

export default LandingPage;