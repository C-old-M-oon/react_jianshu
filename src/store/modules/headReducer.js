import { TOGGLE_INPUT_STATUS, CHANGE_HOT_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE } from '../actionTypes'
// 利用immutable提供的fromJS，将state变为不可变更对象
import { fromJS } from 'immutable'
const defaultReducer = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
})

export default (state = defaultReducer, action) => {
  switch(action.type) {
    case TOGGLE_INPUT_STATUS: 
      return state.set('focused', !state.get('focused'))
    case CHANGE_HOT_LIST:
      // 当同时改变多个状态时，使用merge效率更高
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case MOUSE_ENTER:
      return state.set('mouseIn', true)
    case MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case CHANGE_PAGE: 
      return state.set('page', action.page)
    default:
      return state
  }
}