import { getEnv } from '@utils/get_env'
import { defineSecret } from 'firebase-functions/params'

enum SECRETS {
  MONGO_URL = 'MONGO_URL'
}
export const mongoURLKey = defineSecret(SECRETS.MONGO_URL)

const DEFAULT_DATABASE = 'orders-service'

const settings = {
  name: getEnv('APP_NAME', 'order-management-service'),
  mongo: {
    url: mongoURLKey,
    database: DEFAULT_DATABASE
  }
}

export default settings
