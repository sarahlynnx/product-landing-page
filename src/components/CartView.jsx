import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CartView = ({cartItems = [], onHide}) => { 
    // update styles of cartview box 
    return (
        <Modal show={cartItems.length > 0} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.map((item, index) => (
                    <div key={index}>
                        <p>{item.flavor}</p>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">
                    Checkout
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CartView;