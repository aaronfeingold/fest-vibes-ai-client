import { combineReducers } from 'redux'
import eventsReducer from './Events.slice'

const rootReducer =  combineReducers({
  events: eventsReducer
})

export default rootReducer
