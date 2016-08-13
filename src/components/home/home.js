import React from 'react';
import TitleBar from '../titleBar/titleBar';
import BottomBar from '../bottomBar/bottomBar';

export default class Home extends React.Component {
  render() {
    return (
      <section>
        <TitleBar />
        {this.props.children}
        <BottomBar />
      </section>
    );
  }
}
