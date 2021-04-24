import { ApolloServer } from 'apollo-server'

import Query from './resolvers/Query.js'
import typeDefs from './typeDefs.js'

const resolvers = {
  Query,
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});