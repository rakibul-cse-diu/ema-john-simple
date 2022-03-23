// Men's Sneaker
// Men's Pants
// Men's Boot
// Bag
// Cap
// Earphones
// Bottle
import React, { useEffect } from 'react';
import './Shop.css';

const Shop = () => {
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
        // .then(data => console.log(data))
    }, [])

    const handleCategory = (e) => {
        const category = e.target.value;
        console.log(category)
    }
    return (
        <>
            <h1>This is Shop</h1>
            <select name="Category" id="category" onChange={handleCategory}>
                <option value="All">All</option>
                <option value="Men's Sneaker">Men's Sneaker</option>
                <option value="Men's Pants">Men's Pants</option>
                <option value="Men's Boot">Men's Boot</option>
                <option value="Bag">Bag</option>
                <option value="Cap">Cap</option>
                <option value="Earphones">Earphones</option>
                <option value="Bottle">Bottle</option>
            </select>
        </>
    );
};

export default Shop;