import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  overflow: hidden
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  margin-left: 15px;
  margin-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 240px;
  float: right;
`

// topic

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 10px;
  padding-right: 10px;
  font-size: 14px;
  background: #f7f7f7;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topicImg {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

// list
export const ListWrapper = styled.div`
  width: 625px;
  border-top: 1px solid #dcdcdc;
`
export const ListItem = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  display: flex;
  .articImg {
    width: 125px;
    height: 100px;
    margin-left: 15px;
  }
`

export const InfoContent = styled.div`
  flex: 1;
  .title {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }
  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`
