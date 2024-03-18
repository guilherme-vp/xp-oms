import { Field, ID, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class OrderItemModel {
  @Field(() => ID)
  id!: string

  @Field(() => ID)
  productId!: string

  @Field(() => Int)
  quantity!: number
}
