import * as ordersDomain from '@domains/orders'
import logger from '@infra/logger'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { OrderModel } from '../type_definitions'
import { CreateOrderInput } from '../validators'

@Resolver(() => OrderModel)
export class OrderResolver {
  @Mutation(() => OrderModel)
  async createOrder(@Arg('input', () => CreateOrderInput) input: CreateOrderInput) {
    logger.info('Processando Criação de um Pedido', input)
    const order = ordersDomain.onOrderCreated(input)

    return order
  }
}
