import { mongoURLKey } from '@infra/settings'
import { onRequest } from 'firebase-functions/v2/https'

export const web = onRequest({ secrets: [mongoURLKey] }, (req, res) => {
  import('./entrypoints/web').then(({ default: app }) => app(req, res))
})
