const {  gql } = require("apollo-server");
const typeDefs = gql`
  # This "Query this all quieries"
  type Query {
    personCount: Int!
    allPersons: [Person!]!
    findPerson(name: String!): Person
  }

  type Mutation {
    createPerson(input: PersonInput): Person
    deletePerson(id:ID!):Person
  }

  type Person {
    name: String!
    phone: String
    street: String!
    city: String!
    id: ID!
  }

  # This Input change of type
  input PersonInput {
    name: String
    phone: String
    street: String
    city: String
  }
`;

module.exports = { typeDefs };