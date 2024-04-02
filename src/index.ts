import logger from '@infra/logger'
import { mongoURLKey } from '@infra/settings'
import { onRequest } from 'firebase-functions/v2/https'
import 'reflect-metadata'

export const web = onRequest(
  {
    secrets: [mongoURLKey],
    region: 'southamerica-east1',
    concurrency: 1,
    maxInstances: 10
  },
  async (req, res) => {
    logger.info('Incoming Request', req)
    const promise = new Promise(resolve => {
      setTimeout(() => resolve(true), 1000)
    })
    await promise
    import('./entrypoints/web').then(({ default: app }) => app(req, res))
  }
)
