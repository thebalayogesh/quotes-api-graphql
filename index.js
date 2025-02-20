import { ApolloServer } from "@apollo/server";
import { startServerAndCreateLambdaHandler, handlers } from "@as-integrations/vercel";
import { getAllQuotes, getRandomQuote, addQuote, getAuthorQuotes } from "./_db.js";
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    quotes: () => getAllQuotes(),
    randomQuote: () => getRandomQuote(),
    authorQuotes: (_, { author }) => getAuthorQuotes(author),
  },
  Mutation: {
    addQuote: (_, args) => {
      const { quote, author, genre } = args;
      return addQuote(quote, author, genre);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateLambdaHandler(server, handlers.createAPIGatewayProxyEventV2Request);




// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
// import {getAllQuotes, getRandomQuote, addQuote, getAuthorQuotes} from './_db.js';
// import { typeDefs } from './schema.js';

// const resolvers = {
//   Query: {
//     quotes: () => getAllQuotes(),
//     randomQuote: () => getRandomQuote(),
//     authorQuotes: (_, { author }) => {
//       const result = getAuthorQuotes(author);
//       console.log("Fetched Quotes:", result);
//       return result;
//     },
//   },
//   Mutation: {
//     addQuote: (_, args) => {
//       const { quote, author, genre } = args;
//       return addQuote(quote, author, genre);
//     },
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// console.log(`Server ready at PORT: ${url}`);
// // console.log(getQuotes());
// // console.log(typeDefs);

// // if (!quote || !author || !genre) {
// //         throw new Error("All fields (quote, author, genre) are required.");
// // }