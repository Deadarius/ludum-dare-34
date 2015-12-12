import { combineReducers, createStore } from 'redux'

function body (state = [[]], action) {
  switch (action.type) {
    case 'INFECT':
      const { coords } = action
      state[coords[0]][coords[1]].infected = true
      return state + 1
    default:
      return state
  }
}

let initialState = {
  body: [[]]
}

let reducer = combineReducers({ body })
let store = createStore(reducer, initialState)

export default store
