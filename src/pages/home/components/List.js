import React, { Component } from 'react'
import { ListWrapper, ListItem, InfoContent } from '../style'

class List extends Component {
  render() {
    return (
      <ListWrapper>
        <ListItem>
          <InfoContent>
            <p className="title">又一位CEO做起配送员，被顾客“怼”：我还是马云呢”</p>
            <p className="desc">随着这些年互联网的崛起，很多行业都迎来了大繁荣，比如快递行业、外卖行业都迎来了很好的发展，因为这些行业的发展，带动了配送人员的剧增，目前配送已经...</p>
          </InfoContent>
          <img className="articImg" src="//upload-images.jianshu.io/upload_images/13778757-4d2e5ef52e88098a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt=""/>
        </ListItem>
      </ListWrapper>
    )
  }
}

export default List