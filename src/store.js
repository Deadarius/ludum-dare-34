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

function generateBody () {
  let body = [[]]

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      body[i][j] = {}
    }
  }

  return body
}

let initialState = {
  body: generateBody()
}

let reducer = combineReducers({ body })
let store = createStore(reducer, initialState)

export default store
