import { client } from 'vue'

const path = 'api/clients'

export default {
  all(entity, cb, errorCb) {
    client({ path, method: 'get', entity }).then(cb, errorCb)
  }
}
