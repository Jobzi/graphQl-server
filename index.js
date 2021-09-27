require("./src/database/conection");
const UserModel = require("./src/models/person")
const {typeDefs}= require("./src/types")
const { ApolloServer } = require("apollo-server");
const {  ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");



const resolvers = {
  Query: {
    personCount: async () => await UserModel.count(),
    allPersons: () => {
      return UserModel.find({});
    },
    findPerson: async (_, { name }) => {
      return await UserModel.findOne({ name });
    },
  },
  Mutation: {
    createPerson: async (_, { input }) => {
      const newPerson = new UserModel(input);
      await newPerson.save();
      return newPerson;
    },
    deletePerson:async(_,{id})=>{
      return await UserModel.findByIdAndDelete(id)
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
