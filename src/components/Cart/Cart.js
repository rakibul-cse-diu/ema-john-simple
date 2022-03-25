import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cartItem } = props;;
    let totalPrice, totalShipping, total;
    let price = 0;
    let shipping = 0;
    let tax = 0;

    for (const item of cartItem) {
        price = price + (item.price * item.quantity);
        totalPrice = price;
        shipping = shipping + item.shipping;
        totalShipping = shipping
        tax = parseFloat((tax + item.price * 0.02).toFixed(2));
        total = totalPrice + totalShipping + tax;
    }




    return (
        <div className='cart-wrapper'>
            <h2>Order Summary</h2>
            <div className="memo">
                <p>Selected Items: {cartItem.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <hr />
                <h4>Total: ${total}</h4>
            </div>
        </div>
    );
};

export default Cart;