import React, { useEffect, useState } from 'react';
import { addToDataBase, getCartFromDb } from '../../Utilities/storage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    let showProducts;

    const [Products, setProducts] = useState([]);
    const [Category, setCategory] = useState("All");
    const [CartItem, setCartItem] = useState([]);

    // Load Data
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    // Get cart from storage
    useEffect(() => {
        const storedCart = getCartFromDb();
        let productOnCart = [];
        for (const key in storedCart) {
            const addedProducts = Products.find(product => product.id === key)
            if (addedProducts) {
                addedProducts.quantity = storedCart[key]
                productOnCart.push(addedProducts);
            }
        }
        setCartItem(productOnCart);
    }, [Products])

    // Category select
    const handleCategory = (e) => {
        const category = e.target.value;
        setCategory(category);
    }

    // Handler for Add to cart button 
    const handleAddToCart = (item) => {
        let newCart = [];
        const addedProduct = CartItem.find(pd => pd.id === item.id)
        if (addedProduct) {
            const restProduct = CartItem.filter(pd => pd.id !== item.id)
            item.quantity = item.quantity + 1;
            newCart = [...restProduct, item]
        } else {
            item.quantity = 1;
            newCart = [...CartItem, item]
        }
        setCartItem(newCart)
        addToDataBase(item.id);
    }

    // Display data according tothe category 
    if (Category === '' || Category === "All") {
        showProducts = Products.map(product => <Product products={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)
    }
    if (Category === "Men's Sneaker") {
        let products = Products.filter(product => product.category === Category)
        showProducts = products.map(product => <Product products={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)
    }
    if (Category === "Men's Pants") {
        let products = Products.filter(product => product.category === Category)
        showProducts = products.map(product => <Product products={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)
    }
    if (Category === "Men's Boot") {
        let products = Products.filter(product => product.category === Category)
        showProducts = products.map(product => <Product products={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)
    }
    if (Category === "Bag") {
        let products = Products.filter(product => product.category === Category)
        showProducts = products.map(product => <Product products={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)
    }
    if (Category === "Cap") {
        let products = Products.filter(product => product.category === Category)
        showProducts = products.map(product => <Product products={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)
    }
    if (Category === "Earphones") {
        let products = Products.filter(product => product.category === Category)
        showProducts = products.map(product => <Product products={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)
    }
    if (Category === "Bottle") {
        let products = Products.filter(product => product.category === Category)
        showProducts = products.map(product => <Product products={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)
    }




    return (
        <>
            <div className="category-area">
                <h3>Category: {Category}</h3>
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
            </div>
            <div className="shop-container">
                <div className="products">
                    {
                        showProducts
                    }
                </div>
                <div className="carts">
                    <Cart cartItem={CartItem}></Cart>
                </div>
            </div>

        </>
    );
};

export default Shop;