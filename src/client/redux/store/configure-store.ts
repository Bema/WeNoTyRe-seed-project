import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'
import thunk from 'redux-thunk'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from '../reducers'

const reduxDevTools = getDevToolsExtension()
const isDev = (process as any).env.NODE_ENV === 'development'
const composeEnhancers = isDev && reduxDevTools ? reduxDevTools : compose

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  )
}

function getDevToolsExtension() {
  if (typeof window === 'object') {
    return (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  return false
}
