import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TitleBar from './titleBar/titleBar';
import BottomBar from './bottomBar/bottomBar';

require('normalize.css/normalize.css');
require('../styles/app.scss');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/*
 * 项目入口组件
 *
 * <TitleBar /> 顶部标题组件
 * <section></section> 正文内容
 * <BottomBar /> 底部控制栏组件
 */
export default class AppComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        <div>
          <TitleBar />
          <section>{this.props.children}</section>
          <BottomBar />
        </div>
      </MuiThemeProvider>
    );
  }
}
