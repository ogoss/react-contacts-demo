import React from 'react';
import AppBar from 'material-ui/AppBar';

const appBarStyle = {
	'position': 'fixed',
	'top': '0',
	'left': '0',
	'height': '56px'
};
const titleStyle = {
	'height': '56px',
	'fontSize': '20px',
	'lineHeight': '56px'
};


export default class TitleBar extends React.Component {
	static defaultProps = {
		appBarStyle: appBarStyle,
		titleStyle: titleStyle
	}
  render() {
    return (
      <AppBar
      	style={this.props.appBarStyle}
      	titleStyle={this.props.titleStyle}
      	title="Title"
      	showMenuIconButton={false}
      />
    );
  }
}
