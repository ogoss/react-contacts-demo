import React from 'react';

export default class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.props.handleScroll();
  }
  render() {
    return (
      <div
      	style={this.props.scrollStyle}
      	className={this.props.scrollClassName}>
      		{this.props.children}
      </div>
    );
  }
}
