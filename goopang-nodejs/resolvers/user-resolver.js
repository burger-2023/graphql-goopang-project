const { users, carts, cartItems } = require('../database');
const { v4: uuidv4 } = require('uuid');

function getCart(userId) {
    const cart = carts.find(cart => cart.user.id === userId);
    if(!cart) throw new Error("Cart not found");

    cart.items = cartItems.filter(cartItem => cartItem.cart.id === cart.id);

    cart.totalAmount = cart.items.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);

    return cart;
}

const userResolver = {
  
    Query: {
        getUser: (_, { userId }) => {
            const user = users.find(user => user.id === userId);
            if(!user) throw new Error("USer not found");

            user.cart = getCart(userId);
            return user;
        }
    },

    Mutation: {
        addUser: (_, { addUserInput }) => {
            const newUser = {
                id: uuidv4().substring(0, 5),
                name: addUserInput.name,
                email: addUserInput.email,
                createdAt: new Date().toISOString()
            };
            users.push(newUser);
            const newCart = { id: uuidv4().substring(0, 5), user: newUser, totalAmount: 0.0 };
            carts.push(newCart);
            newUser.cart = newCart;
            return newUser;
        }
    }
};

module.exports = userResolver;