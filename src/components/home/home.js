import React from 'react';
import TitleBar from '../titleBar/titleBar';
import BottomBar from '../bottomBar/bottomBar';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    const localStorage = window.localStorage;
    // 验证用户是否登陆，使用localStorage模拟用户登录状态
    if(!localStorage.userId) {
      location.href = '#/login';
    }
  }
  render() {
    return (
      <div>
        <TitleBar />
        <div>
          {this.props.children}
        </div>
        <BottomBar />
      </div>
    );
  }
}
