import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'
import { getTopicListAction } from '../../../store/actionCreators'

class Topic extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.getTopicList()
  }

  render() {
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {
          topicList && topicList.map(item => {
            return (
              <TopicItem key={item.id}>
                <img className='topicImg' src={item.imgUrl} alt=""/>
                {item.title}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const stateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList']).toJS()
  }
}

const actionToProps = (dispatch) => {
  return {
    getTopicList() {
      dispatch(getTopicListAction())
    }
  }
}

export default connect(stateToProps, actionToProps)(Topic)