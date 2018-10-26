import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const conposeEnhancers = window.__REDUC_DEVTOOLS_EXTENSION__ ? window.__REDUC_DEVTOOLS_EXTENSION__({}) : compose

const store = createStore(reducer, conposeEnhancers(
  applyMiddleware(thunk)
))

export default store
