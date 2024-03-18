import * as ordersDomain from '@domains/orders'
import logger from '@infra/logger'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { OrderModel } from '../type_definitions'
import { CreateOrderInput } from '../validators'

@Resolver(() => OrderModel)
export class OrderResolver {
  @Query(() => Boolean)
  ok() {
    return true
  }

  @Mutation(() => OrderModel)
  async createOrder(@Arg('input', () => CreateOrderInput) input: CreateOrderInput) {
    console.log(input)
    logger.info('Processando Criação de um Pedido', input)
    const order = ordersDomain.onOrderCreated(input)
    return order
  }
}
