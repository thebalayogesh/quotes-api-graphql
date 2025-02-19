export const typeDefs  = `#graphql

  type Quote  {
    id: Int
    author: String
    genre: String
    quote: String
  }

  type Mutation {
    addQuote(quote: String!, author: String!, genre: String!): Quote
  }

  type Query {
	 quotes(limit: Int): [Quote]
   randomQuote: Quote
  authorQuotes(author: String!): [Quote]
  }

`;


// mutation {
//   addQuote(quote: "I Failed Many Times But i am not failure.", 
//            author: "Yogeshwaran", 
//            genre: "motivational") {
//     id
//     quote
//     author
//     genre
//   }
// }