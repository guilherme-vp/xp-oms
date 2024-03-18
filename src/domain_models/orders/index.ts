export { createOrder } from './create_order'

export interface OrderItem {
  id: string
  productId: string
  quantity: number
}

export interface OrderUser {
  email: string
  name: string
}

export interface Order {
  id: string
  user: OrderUser
  items: OrderItem[]
}
