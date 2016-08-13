import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

require('normalize.css/normalize.css');
require('../styles/app.scss');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/*
 * 项目入口组件
 *
 * <MuiThemeProvider /> material-ui跟组件
 * <section></section> 正文内容
 */
export default class AppComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}
