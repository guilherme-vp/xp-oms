import type { Types } from 'mongoose'
import { Schema } from 'mongoose'

import database from '@infra/database'

export interface OrderUserMongoDocument {
  name: string
  email: string
}

export interface OrderItemMongoDocument {
  _id: Types.ObjectId
  productId: string
  quantity: number
}

export interface OrderMongoDocument {
  _id: Types.ObjectId
  user: OrderUserMongoDocument
  items: OrderItemMongoDocument[]
}

export const userSchema = new Schema<OrderUserMongoDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true }
  },
  { _id: false }
)

export const orderItemSchema = new Schema<OrderItemMongoDocument>({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true }
})

export const schema = new Schema<OrderMongoDocument>(
  {
    user: userSchema,
    items: [orderItemSchema]
  },
  { strict: true, timestamps: true }
)

schema.index({ user: 1 })
schema.index({ 'items.productId': 1 })

export const OrderMongooseModel = database.model<OrderMongoDocument>('Order', schema, 'orders')
