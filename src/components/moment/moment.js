import React from 'react';
import ApiList from '../../apiList';

/**
 * 初始化数据
 * @type {Object}
 */
const stateProps = [{
	wxResult: fetchWxResult()
}];

/**
 * 获取微信热门精选数据
 * @param {object} wxResult 微信数据对象
 */
function fetchWxResult() {
  let wxResult = {};

  // TODO: get data by fetchAPI

  return wxResult;
}
export default class Moment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wxResult: stateProps
    };
  }
  render() {
    return (
      <div></div>
    );
  }
}
