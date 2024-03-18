import logger from '@infra/logger'
import { mongoURLKey } from '@infra/settings'
import { onRequest } from 'firebase-functions/v2/https'
import 'reflect-metadata'

export const web = onRequest(
  { secrets: [mongoURLKey], region: 'southamerica-east1' },
  (req, res) => {
    logger.info('Incoming Request', req)
    import('./entrypoints/web').then(({ default: app }) => app(req, res))
  }
)
