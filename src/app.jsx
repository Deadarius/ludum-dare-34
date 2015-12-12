import store from './store'
import Body from './body.jsx'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

const viewport = document.getElementById('viewport')

ReactDOM.render(
  <Provider store={store}>
    <Body />
  </Provider>,
  viewport
)
