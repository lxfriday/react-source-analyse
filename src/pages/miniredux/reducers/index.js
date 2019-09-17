import { combineReducers } from '../lib/redux'
import counter from './counter'
import weather from './weather'

export default combineReducers({
  counter,
  weather,
})
