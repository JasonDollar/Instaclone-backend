import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

dotenv.config({ path: '.env'})

import Query from './resolvers/Query.js'
import Mutation from './resolvers/Mutation.js'
import Photo from './resolvers/Photo.js'
import User from './resolvers/User.js'
import typeDefs from './typeDefs.js'

const resolvers = {
  Query,
  Mutation,
  Photo,
  User
};

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('db connected'))
  .catch(e => console.log(e))

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});