import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
                <p>Selected Product: {cart.length}</p>
        </div>
    );
};

export default Cart;