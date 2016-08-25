import { client } from 'vue'

export const all = (path, entity = {}, cb, errorCb) => {
  client({ path, method: 'get', entity }).then(cb, errorCb)
}
