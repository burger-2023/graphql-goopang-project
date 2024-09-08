const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs').promises;
const { mergeResolvers } = require('@graphql-tools/merge');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const userResolver = require('./resolvers/user-resolver');
const cartResolver = require('./resolvers/cart-resolver');
const productResolver = require('./resolvers/product-resolver');
const searchResolver = require('./resolvers/search-resolver');

const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');

const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();

const app = express();
const port = 8081;

const schemaFiles = [
    './schemas/query.graphql',
    './schemas/mutation.graphql',
    './schemas/subscription.graphql',
    './schemas/user.graphql',
    './schemas/product.graphql',
    './schemas/cart.graphql',
]

const resolvers = mergeResolvers([
    userResolver,
    cartResolver,
    productResolver,
    searchResolver
]);

async function startServer() {
    const schemas = await Promise.all(
        schemaFiles.map(file => fs.readFile(file, 'utf-8'))
    );

    const schema = makeExecutableSchema({ typeDefs: schemas, resolvers });

    const server = new ApolloServer({ schema, context: { pubsub }});
    await server.start();
    server.applyMiddleware({ app });

    const httpServer = app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}${server.graphqlPath}`);
    })

    const wsServer = new WebSocketServer({
        server: httpServer,
        path: '/graphql'
    });

    useServer({ schema, context: { pubsub }}, wsServer);
}

startServer();