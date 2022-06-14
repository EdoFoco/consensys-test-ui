import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";

interface AuthorizedApolloProviderProps {
  children: JSX.Element;
}

const AuthorizedApolloProvider = (props: AuthorizedApolloProviderProps) => {
  const { children } = props;
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_URL,
  });

  const { getAccessTokenSilently } = useAuth0();

  const authLink = setContext(async () => {
    const token = await getAccessTokenSilently({
      scope: "openid profile email",
    });

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: process.env.REACT_APP_ENV === "development",
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
