import React, {useState} from 'react';
import NavMenu from './Navbar';
import Shop from './Shop';
import About from './About';
import Animation from './Animation';

const LandingPage = () => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [titleBackground, setTitleBackground] = useState('-webkit-linear-gradient(190deg, #89d1ee 5%, #47a6cb 53%, #006e99 91%)');
    const [mobileView, setMobileView] = useState(window.innerWidth < 991);

    return (
        <div>
            <NavMenu 
                showCart={showCart} 
                setShowCart={setShowCart} 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
            />
            <Shop 
                setShowCart={setShowCart} 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
                titleBackground={titleBackground}
                setTitleBackground={setTitleBackground}  
                mobileView={mobileView}
                setMobileView={setMobileView}
            />
            <About 
                titleBackground={titleBackground}
                mobileView={mobileView}
            />
            <Animation />
        </div>
    );
}

export default LandingPage;