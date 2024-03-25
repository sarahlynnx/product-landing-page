import React, {useState} from "react";
import NavMenu from "./Navbar";
import Shop from "./Shop";

const LandingPage = () => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    return (
        <div>
            <Shop showCart={showCart} setShowCart={setShowCart} setCartItems={setCartItems} cartItems={cartItems} />
            <NavMenu showCart={showCart} setShowCart={setShowCart} cartItems={cartItems} setCartItems={setCartItems} />
        </div>
    );
}

export default LandingPage;