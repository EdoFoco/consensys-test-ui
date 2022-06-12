import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.REACT_APP_API_URL);

export const gqlClient = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
});
