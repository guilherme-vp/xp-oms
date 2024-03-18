import { IsEmail, IsString } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class OrderUserInput {
  @IsEmail()
  @Field(() => String)
  email!: string

  @IsString()
  @Field(() => String)
  name!: string
}
