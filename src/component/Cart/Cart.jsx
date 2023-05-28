import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const cart = props.cart;
    // console.log(cart);
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }

        // or, product.quantity = product.quantity || 1; (if conditon in short)

        totalPrice = totalPrice + product.price * quantity;
        totalShipping = totalShipping + product.shipping * quantity;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: {totalShipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h6>Grand Total: $ {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;