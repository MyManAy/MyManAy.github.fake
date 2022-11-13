import { ApolloClient, from } from "@apollo/client";
import { HttpLink, InMemoryCache } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors }: any) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }: any) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://money.hasura.app/v1/graphql",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret":
        "PEXc9q6lySrzh2IeMUQTlD9gDG4tt39Qnx721QarVJYAhSUfkXUNSD27xSwG76pt",
    },
  }),
]);

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
