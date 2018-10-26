import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyle from  './style.js';
import Header from './common/header'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <BrowserRouter>
            <div className='rootRouter'>
              {/* exact用于完全匹配名称，否则会同时匹配/根目录 */}
              <Route path='/' component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
          <GlobalStyle />
        </div>
      </Provider>
    );
  }
}

export default App;
