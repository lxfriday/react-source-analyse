import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
const middlewares = [createLogger()]
const enhancer = compose(applyMiddleware(...middlewares))
export default function configStore() {
  const store = createStore(rootReducer, enhancer)
  return store
}
