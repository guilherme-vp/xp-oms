import { connectDB } from '@infra/database'
import express from 'express'
import createGraphQLServer from './graphql'

const app = express()

async function createOMSWebApp() {
  await connectDB()
  await createGraphQLServer(app)
}

createOMSWebApp()

export default app
