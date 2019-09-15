import { createStore } from '../lib/redux'
import rootReducer from '../reducers'
export default function configStore() {
  const store = createStore(rootReducer)
  return store
}
