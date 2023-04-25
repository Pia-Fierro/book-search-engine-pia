const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type query {
    me: User
  }
  type mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook:(newBook: BookInput): User
    removeBook(bookId:Sting!): User
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
