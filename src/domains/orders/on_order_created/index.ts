import { createOrder, type Order } from '@domain_models/orders'
import domainEvents, { DomainEventName } from '@infra/domain_events'
import logger from '@infra/logger'

interface OrderCreatedArgs {
  user: {
    name: string
    email: string
  }
  items: Array<{
    id: string
    quantity: number
  }>
}

const onOrderCreated = async (data: OrderCreatedArgs): Promise<Order> => {
  logger.info('Salvando nova order no banco de dados')
  const createdOrder = await createOrder(data)

  const mappedOrder = {
    id: createdOrder._id.toString(),
    user: createdOrder.user,
    items: createdOrder.items.map(({ _id, ...item }) => ({ ...item, id: _id.toString() }))
  }

  logger.info(`Publicando ${DomainEventName.ORDER_CREATED}...`)
  await domainEvents.publishMessage({
    eventName: DomainEventName.ORDER_CREATED,
    message: mappedOrder
  })

  logger.info('Criação do Pedido concluída')
  return mappedOrder
}

export default onOrderCreated
