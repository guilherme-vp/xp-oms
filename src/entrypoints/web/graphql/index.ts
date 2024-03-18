import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { buildSchema } from 'type-graphql'
import { OrderResolver } from './resolvers'

async function createServer(): Promise<ApolloServer> {
  const schema = await buildSchema({
    resolvers: [OrderResolver]
  })

  const server = new ApolloServer({
    schema,
    introspection: true,
    includeStacktraceInErrorResponses: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault()]
  })

  await server.start()
  return server
}

export default createServer
