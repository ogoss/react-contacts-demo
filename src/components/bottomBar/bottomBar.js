import React from 'react';
import { browserHistory } from 'react-router';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';

// 跳转按钮及地址
const menuList = [
  {name: 'Home', linkto: '', icon: 'home'},
  {name: 'Contact', linkto: 'contact', icon: 'group'},
  {name: 'User', linkto: 'user', icon: 'person'}
];
// 控制栏居底
const navStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%'
};
// 获取当前地址
const currentPath = window.location.pathname.replace(/\//g, '');

export default class BottomBar extends React.Component {
  // TODO: 按返回键，菜单未作出相应动作
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    // 匹配当前地址，高亮对应的菜单
    menuList.forEach((data, index) => {
      if(data.linkto === currentPath) {
        this.state = {
          selectedIndex: index
        };
      }
    });
  }
  static defaultProps = {
    menuList: menuList,
    navStyle: navStyle
  }
  handleSelect(index) {
    this.setState({
      selectedIndex: index
    });
    browserHistory.push(this.props.menuList[index].linkto);
  }
  render() {
    return (
      <nav style={this.props.navStyle}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={<FontIcon className="material-icons">home</FontIcon>}
            onTouchTap={()=>this.handleSelect(0)} />
          <BottomNavigationItem
            label="Contact"
            icon={<FontIcon className="material-icons">group</FontIcon>}
            onTouchTap={()=>this.handleSelect(1)} />
          <BottomNavigationItem
            label="User"
            icon={<FontIcon className="material-icons">person</FontIcon>}
            onTouchTap={()=>this.handleSelect(2)} />
        </BottomNavigation>
      </nav>
    );
  }
}
