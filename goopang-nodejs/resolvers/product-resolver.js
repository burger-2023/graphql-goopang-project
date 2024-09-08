const { products, ProductType } = require('../database');
const { v4: uuidv4 } = require("uuid");
const { withFilter } = require('graphql-subscriptions');

const resolvers = {

    Product: {
        __resolveType(obj) {
            if(obj.productType == ProductType.ELECTRONICS) return 'Electronics';
            if(obj.productType == ProductType.CLOTHING) return 'Clothing';
            return null;
        }
    },

    Query: {
        getProducts: () => products
    },

    Mutation: {
        addProduct: (_, { addProductInput }, { pubsub }) => {
            const newProduct = {
                id: uuidv4().substring(0, 5),
                name: addProductInput.name,
                price: addProductInput.price,
                productType: addProductInput.productType,
                warrantyPeriod: addProductInput.warrantyPeriod,
                size: addProductInput.size
            };
            products.push(newProduct);

            pubsub.publish('NEW_PRODUCT', { newProduct });

            return newProduct;
        }
    },

    Subscription: {
        newProduct: {
            subscribe: withFilter(
                (_, __, { pubsub }) => pubsub.asyncIterator('NEW_PRODUCT'),
                (payload, variables) => {
                    if(variables.productName == null) {
                        return true;
                    }
                    else if(payload.newProduct.name.includes(variables.productName)){
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            )
            
        }
    }
}

module.exports = resolvers;