import { QUERY_UPDATE } from '../actions/queries'

const initialState = {
  queryString: '',
}

function queryReducer(state=initialState, action) {
  switch(action.type) {
    case QUERY_UPDATE:
      return {
        ...state,
        queryString: action.payload.queryString.toLocaleLowerCase(),
      }
    default:
      return state
  }
}

export default queryReducer
