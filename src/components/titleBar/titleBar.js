import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class TitleBar extends React.Component {
  render() {
    return (
      <AppBar title="Title" showMenuIconButton={false} />
    );
  }
}
