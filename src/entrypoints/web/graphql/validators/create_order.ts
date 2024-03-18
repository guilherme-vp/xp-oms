import { Type } from 'class-transformer'
import { ValidateNested } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import { OrderItemInput } from './order_item'
import { OrderUserInput } from './order_user'

@InputType()
export class CreateOrderInput {
  @Field(() => OrderUserInput)
  @ValidateNested()
  @Type(() => OrderItemInput)
  user!: OrderUserInput

  @Field(() => [OrderItemInput])
  @ValidateNested({ each: true })
  @Type(() => OrderItemInput)
  items!: OrderItemInput[]
}
