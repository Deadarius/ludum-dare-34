import store from './store'
import Body from './body.jsx'

import React from 'react'
import ReactDOM from 'react-dom'

const state = store.getState()

ReactDOM.render(
  React.createElement(Body, { body: state.body }),
  document.getElementById('viewport')
)
