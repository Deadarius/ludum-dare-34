import { combineReducers, createStore } from 'redux'
import { Noise } from 'noisejs'

const BASE_COLOUR_RED = 196
const BASE_COLOUR_BLUE = 63
const BASE_COLOUR_GREEN = 63

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
  let noise = new Noise(Math.random())
  let body = []

  for (let i = 0; i < 100; i++) {
    let row = body[i] = []
    for (let j = 0; j < 100; j++) {
      let value = Math.floor(noise.simplex2(i, j) * 50)
      let colour = `rgb(${BASE_COLOUR_RED + value}, ${BASE_COLOUR_BLUE}, ${BASE_COLOUR_GREEN})`

      row[j] = {
        colour
      }
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
