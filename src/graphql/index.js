import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/link-context'
import { getToken } from '../utils/token'
import config from '../config'

const httpLink = createHttpLink({
  uri: config.graphqlUrl,
})

const authLink = setContext((_, { headers }) => {
  const token = getToken()
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `jwt ${token}` } : null),
    },
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})

export { client }
