import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

function loggerMiddleware(storeContext) {
  return function(nextDispatch) {
    // 上面的 store.dispatch
    return function(action) {
      console.log('before', storeContext.getState())
      nextDispatch(action)
      console.log('after', storeContext.getState())
    }
  }
}

const middlewares = [loggerMiddleware]

const enhancer = compose(applyMiddleware(...middlewares))

export default function configStore() {
  const store = createStore(rootReducer, enhancer)
  return store
}
