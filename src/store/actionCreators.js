import { TOGGLE_INPUT_STATUS, CHANGE_HOT_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE, GET_TOPIC_LIST } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeHotList = (data) => {
  return {
    type: CHANGE_HOT_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
  }
}

export const getToggleStatusAction = () => {
  return {
    type: TOGGLE_INPUT_STATUS
  }
}

export const getHotListAction = () => {
  return (dispatch) => {
    axios.get('api/hotList.json').then((res) => {
      dispatch(changeHotList(res.data.list))
    }).catch(() => {
      console.log('error')
    })
  }
}

export const mouseEnterAction = () => {
  return {
    type: MOUSE_ENTER
  }
}

export const mouseLeaveAction = () => {
  return {
    type: MOUSE_LEAVE
  }
}

export const changePageAction = (page) => {
  return {
    type: CHANGE_PAGE,
    page
  }
}

// 首页相关
const changeTopicList = (data) => {
  return {
    type: GET_TOPIC_LIST,
    data: fromJS(data)
  }
}

export const getTopicListAction = () => {
  return (dispatch) => {
    axios.get('api/topicList.json').then((res) => {
      dispatch(changeTopicList(res.data.list))
    }).catch((e) => {
      console.log(e)
    })
  }
}