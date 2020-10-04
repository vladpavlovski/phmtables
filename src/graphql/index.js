import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import config from '../config'

const httpLink = createHttpLink({
  uri: config.graphqlUrl,
  credentials: 'include',
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
})

export { client }
