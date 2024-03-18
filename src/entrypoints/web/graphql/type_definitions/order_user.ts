import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class OrderUserModel {
  @Field(() => String)
  name!: string

  @Field(() => String)
  email!: string
}
