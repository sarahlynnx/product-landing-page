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
    const [titleBackground, setTitleBackground] = useState('webkit-linear-gradient(180deg, #89d1ee 5%, #47a6cb 53%, #006e99 91%)');

    const handleFlavorSelect = (flavor, images, backgroundGradient) => {
        setSelectedFlavor(flavor);
        setSelectedImages(images);
        setTitleBackground(backgroundGradient)
    };

    const handleImageSelect = (image) => {
        setDisplayImage([image]);
    }

    return (
        <Container fluid>
            <Row>
                <Col lg={5}>
                    <div className="product-images">
                            <Image className='product-img img-fluid' src={displayImage} alt={selectedFlavor} />
                    </div>
                </Col>
                <Col lg={7}>
                    <div className="product-details">
                            <h1 className="product-title" style={{background: titleBackground}}>{selectedFlavor}</h1>
                            <div className="gradient-line"></div>
                            <Nav className="product-nav">
                            <NavDropdown title="MILK CHOCOLATE" id="milk-chocolate-dropdown">
                                {Object.entries(flavorImages['MILK CHOCOLATE']).map(([flavor, data]) => (
                                    <NavDropdown.Item key={flavor} onClick={() => handleFlavorSelect(flavor, data.images || [], data.backgroundGradient)}>{flavor}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown title="DARK CHOCOLATE" id="dark-chocolate-dropdown">
                                {Object.entries(flavorImages['DARK CHOCOLATE']).map(([flavor, data]) => (
                                    <NavDropdown.Item key={flavor} onClick={() => handleFlavorSelect(flavor, data.images || [], data.backgroundGradient)}>{flavor}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown title="SAMPLER PACKS" id="sampler-packs-dropdown">
                                {Object.entries(flavorImages['SAMPLER PACKS']).map(([flavor, data]) => (
                                    <NavDropdown.Item key={flavor} onClick={() => handleFlavorSelect(flavor, data.images || [], data.backgroundGradient)}>{flavor}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown title="MINI CRISPS" id="mini-crisps-dropdown">
                                {Object.entries(flavorImages['MINI CRISPS']).map(([flavor, data]) => (
                                    <NavDropdown.Item key={flavor} onClick={() => handleFlavorSelect(flavor, data.images || [], data.backgroundGradient)}>{flavor}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                        <div className="cart-container d-flex justify-content-around">
                            <div className="product-container">
                                <div className="price-display my-4">$ {31.92} USD</div>
                                <div className="product-description">
                                    <p className="my-3">Eight 2oz. Bags of Undercover Quinoa – Dark Chocolate + Sea Salt</p>
                                    <p className="my-2">Ingredients: Dark Chocolate (Cacao Beans, Pure Cane Sugar, Cocoa Butter, Vanilla Beans), Quinoa, Sea Salt.</p>
                                    <p>Produced on shared equipment with milk chocolate.  May contain trace amounts of Milk.</p>
                                    </div>
                                <div className="add-to-cart">
                                    <Button className="btn">ADD TO CART</Button>
                                </div>
                            </div>
                            {selectedFlavor && (                          
                                <div className="product-thumbnails">
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