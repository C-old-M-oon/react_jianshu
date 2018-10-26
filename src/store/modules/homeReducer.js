import { GET_TOPIC_LIST } from '../actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: []
})

export default (state = defaultState, action) => {
  if (action.type === GET_TOPIC_LIST) {
    return state.set('topicList', action.data)
  }
  switch(action.type) {
    default:
      return state
  }
}