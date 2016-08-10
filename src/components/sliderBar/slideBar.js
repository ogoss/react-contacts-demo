import React from 'react';
import { browserHistory } from 'react-router';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

export default class SlideBar extends React.Component {
  static defaultProps = {
    // 跳转按钮及地址
    menuList: [
      {name: 'Home', linkto: '', icon: 'home'},
      {name: 'Contact', linkto: 'contact', icon: 'group'},
      {name: 'User', linkto: 'user', icon: 'person'}
    ],
    // 控制栏居底
    style: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%'
    }
  }
  /*
   * 控制页面跳转
   *
   * @param {object} tab节点对象
   */
  handleActive(tab) {
    const path = tab.props['data-route'];
    browserHistory.push(path);
  }
  render() {
    return (
      <Tabs style={this.props.style}>
        {this.props.menuList.map((data) => (
          <Tab key={data.name} onActive={this.handleActive} data-route={`/${data.linkto}`} icon={<FontIcon className="material-icons">{data.icon}</FontIcon>} ></Tab>
        ))}
      </Tabs>
    );
  }
}
