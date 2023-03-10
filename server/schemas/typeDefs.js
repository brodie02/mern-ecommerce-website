const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    stock: Int
    price: Float
    categories: [Category]
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    name: String
    email: String
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    categories: [Category]
    products(categories: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(name: String, email: String, password: String): User
    updateProduct(_id: ID!, stock: Int!): Product
    login(email: String!, password: String!): Auth
    addCategory(name: String!): Category
  }
`

module.exports = typeDefs