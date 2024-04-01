import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const CartView = ({cartItems = [], onHide, removeFromCart, cartSubtotal}) => { 
    return (
        <Modal show={cartItems.length > 0} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>CART</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.map((item, index) => (
                    <div key={index} className="d-flex flex-row align-items-center">
                        <div>
                            <Image src={item.thumbnail} thumbnail width={60}/>
                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div>
                                <p style={{minWidth: '276px'}} className="mb-0" >{item.flavor}</p>
                                <p className="mb-0">$ {item.price} USD</p>
                                <button className="remove-btn" onClick={() => removeFromCart(index)}>REMOVE</button>
                            </div>
                            <div className="well">
                                <p className="mb-0">{item.quantity}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Modal.Body>
            <Modal.Footer className="d-flex flex-column justify-content-center align-items-center">
                <div>SUBTOTAL: $ {cartSubtotal} USD</div>
                <Button variant="secondary">
                    CHECKOUT
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CartView;