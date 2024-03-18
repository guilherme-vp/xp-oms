import settings from '@infra/settings'
import { Mongoose } from 'mongoose'

const mongooseInstance = new Mongoose({
  autoIndex: true,
  autoCreate: true,
  runValidators: true,
  'timestamps.createdAt.immutable': true
})

export const connectDB = async () => {
  await mongooseInstance.connect(settings.mongo.url.value(), { dbName: settings.mongo.database })
}

export default mongooseInstance
