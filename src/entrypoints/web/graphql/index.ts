import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import cors from 'cors'
import express, { type Express } from 'express'
import { buildSchema } from 'type-graphql'
import { OrderResolver } from './resolvers'

async function createServer(app: Express): Promise<void> {
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

  app.get('/', cors<cors.CorsRequest>(), express.json(), (_, res) => res.json({ ok: true }))
  app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(server))
}

export default createServer
