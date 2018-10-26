import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recomend from './components/Recomend'
import Writer from './components/Writer'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4502/25b524b6d1d21c508b7ca6a6a0a77ead48eed1b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recomend></Recomend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home
