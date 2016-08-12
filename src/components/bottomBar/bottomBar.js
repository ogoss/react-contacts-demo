import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

/*
 * TODO: 2016-08-12
 * 1.输入错误地址，底部按钮，不跳转至默认
 * 2.BottomNavigationItem 隐藏labelicon居中
 */

// 跳转按钮及地址
const menuList = [
  {label: 'Home', linkto: '#/', icon: 'home'},
  {label: 'Contact', linkto: '#/contact', icon: 'group'},
  {label: 'User', linkto: '#/user', icon: 'person'}
];
// 底部navigation样式
const navBarStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  textAlign: 'center'
};

export default class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1
    };
    this.handleCurrentNav = this.handleCurrentNav.bind(this);
  }
  static defaultProps = {
    menuList: menuList,
    navBarStyle: navBarStyle
  }
  /*
   * 获取当前地址，高亮显示对应菜单
   * return {number} 被选中菜单id
   */
  handleCurrentNav() {
    const currentPath = window.location.hash;
    let currentNavIndex = 0;

    for(let i = 0, len = menuList.length; i < len; i++) {
      if(menuList[i].linkto === currentPath) {
        currentNavIndex = i;
        break;
      }
    }
    return currentNavIndex;
  }
  render() {
    return (
      <Paper zDepth={1} style={this.props.navBarStyle}>
        <BottomNavigation selectedIndex={this.handleCurrentNav()}>
          {this.props.menuList.map((data, index)=>(
            <BottomNavigationItem
              key={index}
              label={data.label}
              icon={<FontIcon className="material-icons">{data.icon}</FontIcon>}
              value={data.linkto}
              href={data.linkto}
            />
          ))}
        </BottomNavigation>
      </Paper>
    );
  }
}
