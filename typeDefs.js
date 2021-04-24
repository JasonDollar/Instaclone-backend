import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    photos: [Photo]
    getUser(userId: ID!): User
    getPhoto(photoId: ID!): Photo
  }

  type Mutation {
    addUser(data: CreateUserInput!): User
    addPhoto: Photo
  }

  type Photo {
    id: ID!
    description: String
    mediaUrl: String!
    createdAt: String
    user: User!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    photos: [Photo!]!
  }

  input CreateUserInput {
    username: String! 
    email: String!
    password: String!
  }
`

export default typeDefs