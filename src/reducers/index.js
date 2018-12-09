import { combineReducers } from 'redux'
import queryReducer from './queryReducer'

const reducers = {
  queries: queryReducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer

