import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import routes from './routes'
import configureStore from './redux/store/configure-store'
import initialState from './redux/store/initial-state'

import './index.css'

const store = configureStore(initialState)

ReactDOM.render(
  <div className="App">
    <Provider store={ store }>
      <Router>
        { routes }
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
)
