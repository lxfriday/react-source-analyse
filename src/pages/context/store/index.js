import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const middlewares = [thunkMiddleware, createLogger()]

const enhancer = compose(
  applyMiddleware(...middlewares)
  // other store enhancers if any
)

export default function configStore() {
  const store = createStore(rootReducer, enhancer)
  return store
}
