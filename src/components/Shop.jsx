import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import flavorImages from "./FlavorImages";

const Shop = () => {
    const defaultCategory = 'DARK CHOCOLATE';
    const defaultFlavor = 'DARK CHOCOLATE + SEA SALT';
    const [selectedFlavor, setSelectedFlavor] = useState(defaultFlavor);
    const [selectedImages, setSelectedImages] = useState(flavorImages[defaultCategory][defaultFlavor].images);
    const [displayImage, setDisplayImage] = useState(flavorImages[defaultCategory][defaultFlavor].images[0]);
    const [titleBackground, setTitleBackground] = useState('-webkit-linear-gradient(180deg, #89d1ee 5%, #47a6cb 53%, #006e99 91%)');
    const [productPrice, setProductPrice] = useState('31.92');
    const [productDescription, setProductDescription] = useState('Eight 2oz. Bags of Undercover Quinoa – Dark Chocolate + Sea Salt');
    const [productIngredients, setProductIngredients] = useState('Dark Chocolate (Cacao Beans, Pure Cane Sugar, Cocoa Butter, Vanilla Beans), Quinoa, Sea Salt.');
    const [productWarning, setProductWarning] = useState('Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.');
    const [samplerContents, setSamplerContents] = useState('');

    const handleFlavorSelect = (flavor, images, backgroundGradient, description, ingredients, price, warning, contents) => {
        setSelectedFlavor(flavor);
        setSelectedImages(images);
        setTitleBackground(backgroundGradient);
        setDisplayImage(images[0]);
        setProductDescription(description);
        setProductIngredients(ingredients);
        setProductPrice(price);
        setProductWarning(warning);
        setSamplerContents(contents);
    };

    const productTitleStyles = {
        backgroundImage: titleBackground,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextStroke: '4px transparent',
        color: '#232025'
      };

    const handleImageSelect = (image) => {
        setDisplayImage([image]);
    }

    return (
        <Container fluid>
            <Row>
                <Col lg={5}>
                    <div className="product-images">
                            <Image className='product-img img-fluid' src={displayImage} alt={selectedFlavor} width={600} height={753} />
                    </div>
                </Col>
                <Col lg={7}>
                    <div className="product-details">
                            <h1 className="product-title" style={productTitleStyles}>{selectedFlavor}</h1>
                            <div className="gradient-line" style={{background: titleBackground}}></div>
                            <Nav className="product-nav">
                            <NavDropdown title="DARK CHOCOLATE" id="dark-chocolate-dropdown">
                                {Object.entries(flavorImages['DARK CHOCOLATE']).map(([flavor, data]) => (
                                    <NavDropdown.Item key={flavor} onClick={() => handleFlavorSelect(flavor, data.images || [], data.backgroundGradient, data.description, data.ingredients, data.price, data.warning, data.contents)}>{flavor}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown title="MILK CHOCOLATE" id="milk-chocolate-dropdown">
                                {Object.entries(flavorImages['MILK CHOCOLATE']).map(([flavor, data]) => (
                                    <NavDropdown.Item key={flavor} onClick={() => handleFlavorSelect(flavor, data.images || [], data.backgroundGradient, data.description, data.ingredients, data.price, data.warning, data.contents,)}>{flavor}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown title="SAMPLER PACKS" id="sampler-packs-dropdown">
                                {Object.entries(flavorImages['SAMPLER PACKS']).map(([flavor, data]) => (
                                    <NavDropdown.Item key={flavor} onClick={() => handleFlavorSelect(flavor, data.images || [], data.backgroundGradient, data.description, data.ingredients, data.price, data.warning, data.contents,)}>{flavor}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown title="MINI CRISPS" id="mini-crisps-dropdown">
                                {Object.entries(flavorImages['MINI CRISPS']).map(([flavor, data]) => (
                                    <NavDropdown.Item key={flavor} onClick={() => handleFlavorSelect(flavor, data.images || [], data.backgroundGradient, data.description, data.ingredients, data.price, data.warning, data.contents,)}>{flavor}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                        <div className="cart-container d-flex justify-content-around">
                            <div className="product-container">
                                <div className="price-display my-4">$ {productPrice} USD</div>
                                <div className="product-description">
                                    <p className="my-3">{productDescription}</p>
                                    <p>{samplerContents}</p>
                                    <p className="my-2"><strong>{`Ingredients:`}</strong> {productIngredients}</p>
                                    <p>{productWarning === 'Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.' ? <em>{productWarning}</em> : <strong>{productWarning}</strong>}</p>
                                </div>
                                <div className="add-to-cart">
                                    <Button className="btn">ADD TO CART</Button>
                                </div>
                            </div>
                            {selectedFlavor && (                          
                                <div className="product-thumbnails">
                                    {/* add vertical carousel for thumbnails */}
                                    {selectedImages.map((image, index) => (
                                        <Image key={index} src={image} alt={`${selectedFlavor} Thumbnail ${index + 1}`} onClick={() => handleImageSelect(image)} width={50} thumbnail  />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Shop;