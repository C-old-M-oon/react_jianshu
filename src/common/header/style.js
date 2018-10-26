import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 50px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.button`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  box-sizing: border-box;
  color: #333;
  border: none;
  background: #fff;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    width: 30px;
    line-height: 30px;
    text-align: center;
    right: 5px;
    bottom: 5px;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  &.slide-enter {
    width: 160px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    width: 240px;
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
  width:160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  background: #eee;
  font-size: 14px;
  margin-left: 20px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 15px;
  padding-bottom: 0;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`

export const SearchInfoTitle = styled.div`
  margin-bottom: 15px;
  line-height: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
  .spin {
    display:inline-block;
    font-size: 12px;
    margin-right: 2px;
    transition: all .3s ease-in;
    transform-origin: center center;
  }
`
export const SearchInfoItem = styled.a`
  padding: 0 5px;
  line-height: 20px;
  font-size: 12px;
  border: 1px solid #ccc;
  color: #787878;
  border-radius: 3px;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 15px;
`