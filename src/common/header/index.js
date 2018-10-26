import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle,
  SearchInfoSwitch, SearchInfoItem } from './style'
import { getToggleStatusAction, getHotListAction, mouseEnterAction, mouseLeaveAction, changePageAction } from '../../store/actionCreators'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getListArea = () => {
    const { focused, list, page, mouseIn, handleMouseEnter, handelMouseLeave, handleChangePage, totalPage } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for(let i = (page-1) * 10; i < page * 10; i++) {
        newList[i] && pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handelMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            { pageList }
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  onFocus = (status) => {
    this.props.handleToggleStatus(1, this.props.list)
  }

  onBlur = (status) => {
    this.props.handleToggleStatus(0)
  }

  render() {
    const { focused } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont ">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe63d;</i>
            {
              this.getListArea()
            }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className="iconfont ">&#xe625;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    // 将state数据转换为immutable对象后不可直接调用，需要用get方法
    // focused: state.header.focused
    focused: state.get('header').get('focused'),
    mouseIn: state.getIn([ 'header', 'mouseIn' ]),
    // focused: state.getIn([ 'header', 'focused' ]) 和上面一种写法等价
    list: state.getIn([ 'header', 'list' ]) || [],
    page: state.getIn([ 'header', 'page' ]),
    totalPage: state.getIn([ 'header', 'totalPage' ])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleStatus(status, list) {
      if (Boolean(status) && list.size === 0) {
        dispatch(getHotListAction())
      }
      dispatch(getToggleStatusAction())
    },
    handleMouseEnter() {
      dispatch(mouseEnterAction())
    },
    handelMouseLeave() {
      dispatch(mouseLeaveAction())
    },
    handleChangePage(page, totalPage, spin) {
      let _deg = spin.style.transform.replace(/[^0-9]/ig, '')
      if (_deg) {
        _deg = parseInt(_deg, 10) + 360;
      } else {
        _deg = 360;
      }
      console.log(_deg)
      spin.style.transform = `rotate(${_deg}deg)`
      if (page < totalPage) {
        dispatch(changePageAction(page+1))
      } else {
        dispatch(changePageAction(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
