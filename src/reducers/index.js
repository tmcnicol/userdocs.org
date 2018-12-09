import { combineReducers } from 'redux'

import documentReducer from './documents'
import queryReducer from './queries'

const reducers = {
  documents: documentReducer,
  queries: queryReducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer

