import { PubSub } from '@google-cloud/pubsub'
import logger from '@infra/logger'

export enum DomainEventName {
  /* eslint-disable @typescript-eslint/naming-convention */
  ORDER_CREATED = 'order.created'
  /* eslint-enable @typescript-eslint/naming-convention */
}

const pubsub = new PubSub()

async function publishMessage({
  eventName,
  message
}: {
  eventName: string
  message: unknown
}) {
  const stringifiedData = JSON.stringify(message)
  const dataBuffer = Buffer.from(stringifiedData)

  try {
    const messageId = await pubsub.topic(eventName).publishMessage({ data: dataBuffer })
    logger.info(`Mensagem ${messageId} publicada`, message)
  } catch (error) {
    logger.error(`Erro ao publicar: ${(error as Error).message}`)
  }
}

export default { publishMessage }
