import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from '../lib/redux'
import rootReducer from '../reducers'

const enhancers = compose(applyMiddleware(thunk.withExtraArgument({ info: 'extra args when applyMiddleware' })))

export default function configStore() {
  const store = createStore(rootReducer, enhancers)
  return store
}
