import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Root from './components/Root.js'
import store from './store/store.js'

window.script8 = window.script8 || {}

render(
  <HashRouter>
    <Root store={store} />
  </HashRouter>,
  document.getElementById('root')
)
