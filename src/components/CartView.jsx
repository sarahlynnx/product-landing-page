import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const CartView = ({cartItems = [], onHide, removeFromCart, incrementQuantity, decrementQuantity, cartSubtotal}) => { 
    return (
        <Modal show onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>CART</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.length > 0 ? (
                    <>
                    {cartItems.map((item, index) => (
                        <div key={index} className='d-flex flex-row align-items-center'>
                            <div>
                                <Image src={item.thumbnail} thumbnail width={60}/>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center'>
                                <div>
                                    <p style={{minWidth: '230px'}} className='mb-0' >{item.flavor}</p>
                                    <p className='mb-0'>$ {item.price} USD</p>
                                    <button className='remove-btn' onClick={() => removeFromCart(index)}>REMOVE</button>
                                </div>
                                <div className='d-flex flex-row align-items-center justify-content-center'>
                                    <button 
                                        className='cart-quantity-btn'
                                        onClick={() => decrementQuantity(index)}
                                    >
                                        <FaMinus />
                                    </button>
                                    <div className='well mx-1'>
                                        <p className='mb-0'>{item.quantity}</p>
                                    </div>
                                    <button 
                                        className='cart-quantity-btn' 
                                        onClick={() => incrementQuantity(index)}
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </>
                ) : (
                    <h4 className='empty-cart'>Oops, your cart is empty!</h4>
                )}
            </Modal.Body>
            {cartItems.length > 0 && (
            <Modal.Footer className='d-flex flex-column justify-content-center align-items-center'>
                <div>SUBTOTAL: $ {cartSubtotal} USD</div>
                <Button 
                    onClick={() => alert('You checked out!')} 
                    variant='secondary'
                >
                    CHECKOUT
                </Button>
            </Modal.Footer>
            )}
        </Modal>
    );
};

export default CartView;