import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // console.log(cart)

    let total = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;


    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
        tax = parseFloat((total * 0.1).toFixed(2));
        grandTotal = total + shipping + tax;
        
    }


    return (
        <div className='cart'>
            <h2>Order Summary</h2>
                <div className="cart-info">
                    <p>Selected Product : {cart.length}</p>
                    <p>Total Price : ${total}</p>
                    <p>Total Shiping Price ${shipping}: </p>
                    <p>Tax : ${tax}</p>
                    <p>Grand Total : ${grandTotal}</p>
                </div>
        </div>
    );
};

export default Cart;