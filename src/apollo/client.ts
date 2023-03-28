import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

export const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      id
      name
      description
    }
  }
`;
