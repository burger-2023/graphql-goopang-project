const users = [
    { id: "1", name: "Burger", email: "burger@goopang.com", createdAt: "2024-07-05T14:30:00Z"},
    { id: "2", name: "Jane", email: "jane@goopang.com", createdAt: "2024-08-05T14:30:00Z"}
];

const ProductType = {
    ELECTRONICS: "ELECTRONICS",
    CLOTHING: "CLOTHING"
};

const products = [
    { id: "1", name: "mac book air", price: 1000.0, productType: ProductType.ELECTRONICS, warrantyPeriod: "3years" },
    { id: "2", name: "iphone 21", price: 2000.0, productType: ProductType.ELECTRONICS, warrantyPeriod: "2years" },
    { id: "3", name: "samsung tv", price: 3000.0, productType: ProductType.ELECTRONICS, warrantyPeriod: "1years" },
    { id: "4", name: "t-shirt", price: 140.0, productType: ProductType.CLOTHING, size: "M" },
    { id: "5", name: "jeans", price: 200.0, productType: ProductType.CLOTHING, size: "XL" },
    { id: "6", name: "dress", price: 100.0, productType: ProductType.CLOTHING, size: "S" },
];

const carts = [
    { id: "1", user: users.find(user => user.id === "1" ) },
    { id: "2", user: users.find(user => user.id === "2" ) }
];

const cartItems = [
    { id: "1", quantity: 2, product: products.find(product => product.id === "1"), cart: carts.find(cart => cart.id === "1") },
    { id: "2", quantity: 1, product: products.find(product => product.id === "2"), cart: carts.find(cart => cart.id === "1") },
    { id: "3", quantity: 5, product: products.find(product => product.id === "3"), cart: carts.find(cart => cart.id === "2") },
    { id: "4", quantity: 4, product: products.find(product => product.id === "4"), cart: carts.find(cart => cart.id === "2") },
    { id: "5", quantity: 2, product: products.find(product => product.id === "5"), cart: carts.find(cart => cart.id === "2") },
];

module.exports = { users, products, carts, cartItems, ProductType };
