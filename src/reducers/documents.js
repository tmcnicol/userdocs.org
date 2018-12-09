const initialState = [
  { key: 'server', name: 'Server', short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'},
  { key: 'database', name: 'Database', short: 'A system to store and access data in a structured way.'},
]

function documentReducer(state=initialState, action) {
  switch(action.type) {
    default:
      return state
  }
}

export default documentReducer
