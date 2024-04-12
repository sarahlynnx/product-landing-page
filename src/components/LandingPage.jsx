import React, {useState} from 'react';
import NavMenu from './Navbar';
import Shop from './Shop';
import About from './About';
import FAQs from './FAQs';
import Contact from './Contact';
import flavorImages from './FlavorImages';

const LandingPage = () => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [titleBackground, setTitleBackground] = useState('-webkit-linear-gradient(190deg, #89d1ee 5%, #47a6cb 53%, #006e99 91%)');
    const [mobileView, setMobileView] = useState(window.innerWidth < 991);
    const [defaultCategory] = useState('DARK CHOCOLATE')
    const [defaultFlavor] = useState('DARK CHOCOLATE + SEA SALT')
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
    const [selectedFlavor, setSelectedFlavor] = useState(defaultFlavor);
    const [selectedImages, setSelectedImages] = useState(flavorImages[defaultCategory][defaultFlavor].images);
    const [displayImage, setDisplayImage] = useState(flavorImages[defaultCategory][defaultFlavor].images[0]);
    const [selectedThumbnail, setSelectedThumbnail] = useState(flavorImages[defaultCategory][defaultFlavor].images[0]);
    const [productPrice, setProductPrice] = useState('31.92');
    const [productDescription, setProductDescription] = useState('Eight 2oz Bags of Undercover Quinoa – Dark Chocolate + Sea Salt');
    const [productIngredients, setProductIngredients] = useState('Dark Chocolate (Cacao Beans, Pure Cane Sugar, Cocoa Butter, Vanilla Beans), Quinoa, Sea Salt.');
    const [productWarning, setProductWarning] = useState('Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.');
    const [samplerContents, setSamplerContents] = useState([]);

    const handleFlavorSelect = (flavor, category, images, backgroundGradient, description, ingredients, price, warning, contents) => {
        setSelectedFlavor(flavor);
        setSelectedCategory(category)
        setSelectedImages(images);
        setSelectedThumbnail(images[0]);
        setTitleBackground(backgroundGradient);
        setDisplayImage(images[0]);
        setProductDescription(description);
        setProductIngredients(ingredients);
        setProductPrice(price);

        setProductWarning(warning);
        if (contents) {
            setSamplerContents(contents);
        } else {
            setSamplerContents([]);
        }
    };

    return (
        <div>
            <NavMenu 
                showCart={showCart} 
                setShowCart={setShowCart} 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
                handleFlavorSelect={handleFlavorSelect}
                selectedCategory={selectedCategory}

            />
            <Shop 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedFlavor={selectedFlavor}
                setSelectedFlavor={setSelectedFlavor}
                selectedImages={selectedImages}
                displayImage={displayImage}
                setDisplayImage={setDisplayImage} 
                selectedThumbnail={selectedThumbnail}
                setSelectedThumbnail={setSelectedThumbnail}
                productPrice={productPrice}
                productDescription={productDescription}
                productIngredients={productIngredients}
                productWarning={productWarning}
                samplerContents={samplerContents}
                setShowCart={setShowCart} 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
                titleBackground={titleBackground}
                setTitleBackground={setTitleBackground}  
                mobileView={mobileView}
                setMobileView={setMobileView}
                handleFlavorSelect={handleFlavorSelect}
            />
            <About 
                titleBackground={titleBackground}
                mobileView={mobileView}
            />
            <FAQs />
            <Contact 
                mobileView={mobileView}
            />
            <div className='footer'>	© Copyright 2024. Handcrafted by Sarah Olson</div>
        </div>
    );
}

export default LandingPage;