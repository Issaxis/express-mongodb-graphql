const { makeExecutableSchema } = require('apollo-server');

const { GlobalTypes } = require('./types/global_type');
const {
  UserQueries, UserTypes, UserMutations, UserResolvers
} = require('./types/user_type');

const Query = `
  type Query {
    ${UserQueries}
  }
`;

const Types = `
  ${GlobalTypes},
  ${UserTypes}
`;

const Mutations = `
  type Mutation {
    ${UserMutations}
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, Types, Mutations],
  resolvers: [UserResolvers]
});

module.exports = schema;
