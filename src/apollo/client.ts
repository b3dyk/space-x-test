import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { RocketType } from "../types/types";

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

export type FetchedData = {
  rockets: RocketType[];
};
