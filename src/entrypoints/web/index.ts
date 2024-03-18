import { expressMiddleware } from '@apollo/server/express4'
import { connectDB } from '@infra/database'
import cors from 'cors'
import express from 'express'
import createGraphQLServer from './graphql'

const app = express()

async function createOMSWebApp() {
  await connectDB()
  const server = await createGraphQLServer()

  app.use('/', cors<cors.CorsRequest>(), express.json(), expressMiddleware(server))
}

createOMSWebApp()

export default app
