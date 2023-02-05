import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri:"https://api-eu-west-2.hygraph.com/v2/cldrc7hkp3fm201un1ah7301g/master",
    cache: new InMemoryCache(),
});

export default client;