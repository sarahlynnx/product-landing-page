import React, {useState, useEffect, useRef} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import Slider from 'react-slick';
import { useSwipeable } from 'react-swipeable';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import flavorImages from './FlavorImages';


const Shop = ({setShowCart, cartItems, setCartItems, titleBackground, setTitleBackground, mobileView, setMobileView}) => {
    const defaultCategory = 'DARK CHOCOLATE';
    const defaultFlavor = 'DARK CHOCOLATE + SEA SALT';
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
    const [selectedFlavor, setSelectedFlavor] = useState(defaultFlavor);
    const [selectedImages, setSelectedImages] = useState(flavorImages[defaultCategory][defaultFlavor].images);
    const [displayImage, setDisplayImage] = useState(flavorImages[defaultCategory][defaultFlavor].images[0]);
    const [selectedThumbnail, setSelectedThumbnail] = useState(flavorImages[defaultCategory][defaultFlavor].images[0]);
    const [productPrice, setProductPrice] = useState('31.92');
    const [productDescription, setProductDescription] = useState('Eight 2oz. Bags of Undercover Quinoa – Dark Chocolate + Sea Salt');
    const [productIngredients, setProductIngredients] = useState('Dark Chocolate (Cacao Beans, Pure Cane Sugar, Cocoa Butter, Vanilla Beans), Quinoa, Sea Salt.');
    const [productWarning, setProductWarning] = useState('Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.');
    const [samplerContents, setSamplerContents] = useState([]);
    const sliderRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 991) {
                setMobileView(true);
            } else {
                setMobileView(false);
            }
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setMobileView]);

    useEffect(() => {
        if (sliderRef.current) {
          const activeIndex = selectedImages.findIndex(
            (image) => image === selectedThumbnail
          );
          if (activeIndex !== -1) {
            sliderRef.current.slickGoTo(activeIndex);
          }
        }
      }, [selectedThumbnail, selectedImages]); 

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

    const addToCart = () => {
        const existingItemIndex = cartItems.findIndex(item => item.flavor === selectedFlavor);
    
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
            setShowCart(true);
        } else {
            const newItem = {
                thumbnail: selectedImages[0],
                flavor: selectedFlavor,
                price: productPrice,
                quantity: 1
            };
            setCartItems([...cartItems, newItem]);
            setShowCart(true);
        }
    };

    const handleSwipe = (direction) => {
        const currentIndex = selectedImages.findIndex(img => img === displayImage);
        let newIndex;
    
        if (direction === 'left') {
            newIndex = (currentIndex + 1) % selectedImages.length;
        } else if (direction === 'right') {
            newIndex = (currentIndex - 1 + selectedImages.length) % selectedImages.length;
        }
    
        const nextImage = selectedImages[newIndex];
        setDisplayImage(nextImage);
        setSelectedThumbnail(nextImage);
    };    

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right')
    });

    const handleImageSelect = (image) => {
        setDisplayImage(image);
        setSelectedThumbnail(image);
    }

    const formatProductTitle = (title) => {
        const plusIndex = title.indexOf('+');
        if (plusIndex !== -1) {
          return (
            <>
              {title.substring(0, plusIndex)}
              <br />
              {title.substring(plusIndex)}
            </>
          );
        }
        return title;
      };

    const productTitleStyles = {
        backgroundImage: titleBackground,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextStroke: '4px transparent',
        color: '#232025'
      };

      const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 1000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }
        ]
      };

    return (
        <Container fluid className='shop-container'>
            <Row className='align-items-center justify-content-between'>
                <Col lg={5} md={12} sm={12} className='product-images text-center'>
                    <Image 
                        className='product-img img-fluid' 
                        src={displayImage} 
                        alt={selectedFlavor} 
                        width={600} 
                        height={753} 
                        {...swipeHandlers}
                    />
                    {mobileView && selectedFlavor && (
                        <div className='product-thumbnails'>
                            <Slider swipeToSlide={true} ref={sliderRef} {...settings}>
                                {selectedImages.map((image, index) => (
                                    <div key={index} className={`thumbnail-item ${image === selectedThumbnail ? 'selected-thumbnail' : ''}`}>
                                        <Image 
                                            src={image} 
                                            alt={`${selectedFlavor} Thumbnail ${index + 1}`} 
                                            onClick={() => handleImageSelect(image)} 
                                            thumbnail  
                                            style={{ width: '80px' }}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    )}
                </Col>
                <Col lg={7} md={12} className='product-details'>
                            <h1 
                                className='product-title' 
                                style={productTitleStyles}
                            >
                                {formatProductTitle(selectedFlavor)}
                            </h1>
                            <div className='gradient-line' style={{background: titleBackground}}></div>
                            <Nav className='product-nav justify-content-between'>
                            <NavDropdown 
                                title={<span style={{ color: selectedCategory === 'DARK CHOCOLATE' ? '#C5A162' : 'inherit' }}>DARK CHOCOLATE</span>} 
                                id='dark-chocolate-dropdown'
                            >
                                {Object.entries(flavorImages['DARK CHOCOLATE']).map(([flavor, data]) => (
                                    <NavDropdown.Item 
                                        key={flavor} 
                                        onClick={() => handleFlavorSelect(
                                            flavor, 
                                            'DARK CHOCOLATE', 
                                            data.images || [], 
                                            data.backgroundGradient, 
                                            data.description, 
                                            data.ingredients, 
                                            data.price, 
                                            data.warning, 
                                            data.contents
                                        )}
                                    >
                                        {flavor}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown 
                                title={<span style={{ color: selectedCategory === 'MINI CRISPS' ? '#C5A162' : 'inherit' }}>MINI CRISPS</span>} 
                                id='mini-crisps-dropdown'
                            >
                                {Object.entries(flavorImages['MINI CRISPS']).map(([flavor, data]) => (
                                    <NavDropdown.Item 
                                        key={flavor} 
                                        onClick={() => handleFlavorSelect(
                                            flavor, 
                                            'MINI CRISPS', 
                                            data.images || [], 
                                            data.backgroundGradient, 
                                            data.description, 
                                            data.ingredients, 
                                            data.price, 
                                            data.warning, 
                                            data.contents
                                        )}
                                    >
                                        {flavor}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown 
                                title={<span style={{ color: selectedCategory === 'MILK CHOCOLATE' ? '#C5A162' : 'inherit' }}>MILK CHOCOLATE</span>} 
                                id='milk-chocolate-dropdown'
                            >
                                {Object.entries(flavorImages['MILK CHOCOLATE']).map(([flavor, data]) => (
                                    <NavDropdown.Item 
                                        key={flavor} 
                                        onClick={() => handleFlavorSelect(
                                            flavor, 
                                            'MILK CHOCOLATE', 
                                            data.images || [], 
                                            data.backgroundGradient, 
                                            data.description, 
                                            data.ingredients, 
                                            data.price, 
                                            data.warning, 
                                            data.contents
                                        )}
                                    >
                                        {flavor}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown 
                                title={<span style={{ color: selectedCategory === 'SAMPLER PACKS' ? '#C5A162' : 'inherit' }}>SAMPLER PACKS</span>} 
                                id='sampler-packs-dropdown'
                            >
                                {Object.entries(flavorImages['SAMPLER PACKS']).map(([flavor, data]) => (
                                    <NavDropdown.Item 
                                        key={flavor} 
                                        onClick={() => handleFlavorSelect(
                                        flavor, 
                                        'SAMPLER PACKS', 
                                        data.images || [], 
                                        data.backgroundGradient, 
                                        data.description, 
                                        data.ingredients, 
                                        data.price, 
                                        data.warning, 
                                        data.contents
                                        )}
                                    >
                                        {flavor}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                        <Row className='cart-container mt-3'>
                            <Col className='product-container'>
                                <div className='price-display mb-4'>$ {productPrice} USD</div>
                                <div className='product-description'>
                                    <p className='my-3'>{productDescription}</p>
                                    {samplerContents.length > 0 && (            
                                        <ul>
                                            {samplerContents.map((content, index) => (
                                                <li key={index}>{content}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {productIngredients && <p className='my-2'><strong>{`Ingredients:`}</strong> {productIngredients}</p>}
                                    <p>
                                        {
                                            productWarning === 'Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.' 
                                            ? <em>{productWarning}</em> 
                                            : <strong>{productWarning}</strong>
                                        }
                                    </p>
                                </div>
                                <div className='add-to-cart'>
                                    <Button 
                                        className='btn' 
                                        style={{backgroundImage: titleBackground}} 
                                        onClick={addToCart}
                                    >
                                        ADD TO CART
                                    </Button>
                                </div>
                            </Col>
                            {!mobileView && selectedFlavor && (                          
                                <Col className='product-thumbnails'>
                                    <Slider 
                                        vertical 
                                        slidesToShow={3} 
                                        slidesToScroll={1} 
                                        verticalAlign='top'
                                    >
                                        {selectedImages.map((image, index) => (
                                            <div 
                                                key={index} 
                                                className={`thumbnail-item ${image === selectedThumbnail ? 'selected-thumbnail' : ''}`} 
                                                style={{ width: '60px' }}
                                            >
                                                <Image 
                                                    src={image} 
                                                    alt={`${selectedFlavor} Thumbnail ${index + 1}`} 
                                                    onClick={() => handleImageSelect(image)} 
                                                    thumbnail  
                                                    style={{ width: '80px' }}
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </Col>
                            )}
                        </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Shop;