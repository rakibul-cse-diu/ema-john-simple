// ADD CART ON LOCAL STORAGE  
const addToDataBase = id => {
    let cart = getCartFromDb();
    // Check quantity 
    const quantity = cart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    } else {
        cart[id] = 1;
    }
    // store cart on DB 
    localStorage.setItem("cart-store-on-db", JSON.stringify(cart));
}

// GET CART FROM DB 
const getCartFromDb = () => {
    let cart;
    // get stored cart from DB 
    const storedCart = localStorage.getItem("cart-store-on-db");
    if (storedCart) {
        cart = JSON.parse(storedCart);
    } else {
        cart = {};
    }
    return cart
}

export {
    addToDataBase,
    getCartFromDb
};