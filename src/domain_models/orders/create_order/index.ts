import { OrderMongooseModel, type OrderMongoDocument } from '../mongoose_model'

interface CreateOrderInput {
  user: {
    name: string
    email: string
  }
  items: Array<{
    id: string
    quantity: number
  }>
}

export async function createOrder(data: CreateOrderInput): Promise<OrderMongoDocument> {
  const order = await OrderMongooseModel.create({
    items: data.items,
    user: data.user
  })

  return order.toJSON()
}
