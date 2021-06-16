import { combineReducers } from 'redux'
import postReducer from './postSlice'

const rootReducer =  combineReducers({
  posts: postReducer
})

export default rootReducer