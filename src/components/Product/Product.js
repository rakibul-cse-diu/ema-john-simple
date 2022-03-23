import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { handleAddToCart } = props;
    const { name, img, price, seller, ratings } = props.products;
    return (
        <div className='products-wrapper'>
            <div className="product">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <br />
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='add-cart-btn' onClick={() => handleAddToCart(props.products)} >Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;