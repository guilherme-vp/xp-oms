import { Field, ID, ObjectType } from 'type-graphql'
import { OrderItemModel } from './order_item'
import { OrderUserModel } from './order_user'

@ObjectType()
export class OrderModel {
  @Field(() => ID)
  id!: string

  @Field(() => OrderUserModel)
  user!: OrderUserModel

  @Field(() => [OrderItemModel])
  items!: OrderItemModel[]
}
