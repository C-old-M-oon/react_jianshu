// import { combineReducers } from 'redux'
// 使用redux-immutable模块，将state也变为一个immutable对象
import { combineReducers } from 'redux-immutable'

import headReducer from './modules/headReducer'
import homeReducer from './modules/homeReducer'

export default combineReducers({
  header: headReducer,
  home: homeReducer
})