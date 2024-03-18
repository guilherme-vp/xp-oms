import { IsNumber, IsString, Min } from 'class-validator'
import { Field, ID, InputType } from 'type-graphql'

@InputType({ isAbstract: true })
export class OrderItemInput {
  @IsString()
  @Field(() => ID)
  productId!: string

  @IsNumber()
  @Min(1)
  @Field(() => Number)
  quantity!: number
}
