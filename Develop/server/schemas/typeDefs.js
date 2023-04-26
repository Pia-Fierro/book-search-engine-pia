const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type QUERY {
    me: User
  }
  type MUTATION {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook:(book: BookInput): User
    removeBook(bookId:String!): User
  }
type User {
    _id:ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    bookId: String!
    authors: [String]
    desription: String!
    title: String!
    image: String
    lik: String
}
input BookInput {
  authors: [String]
  description: String!
  bookId: String!
  image: String
  link:String
  title: String!
}
type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;
