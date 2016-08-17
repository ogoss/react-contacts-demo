import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import ApiList from '../../apiList';
import Scroll from '../utils/scroll.js'

const cardStyle = {
  'marginBottom': '10px'
};
const cardTitleStyle = {
  'padding': '8px 14px'
};
const titleStyle = {
  'fontSize': '14px',
  'lineHeight': '18px',
  'marginBottom': '4px'
};
const subtitleStyle = {
  fontSize: '12px'
};

/**
 * 获取首页数据列表 APIStore
 * @method GET
 */
function fetchWxResult(num = 10, page = 1) {
  const input = `${ApiList.getHomeList}?num=${num}&page=${page}`,
    init = {
      method: 'GET',
      headers: {
        apikey: '9befa2c15677e6aba17ebfb2f6ad7e4f'
      }
    };

  fetch(input, init).then((res) => {
    if (res.ok) {
      res.json().then((data) => {
        if (!data.errNum) {
          this.setState({
            wxResult: data.newslist
          });
        }
      });
    }
  });
}

/**
 * TODO:
 * 1.页面下拉，动态加载新数据
 * 2.返回顶部按钮
 * 3.图片lazyload
 * 4.跳转至其他页面后，返回首页数据不会再次通过API调取
 */
export default class Moment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wxResult: []
    };
    fetchWxResult.call(this);
  }
  static defaultProps = {
    cardStyle: cardStyle,
    cardTitleStyle: cardTitleStyle,
    titleStyle: titleStyle,
    subtitleStyle: subtitleStyle
  }
  handleScroll() {
    console.log('handleScroll');
  }
  render() {
    return (
      <Scroll
        scrollClassName="container"
        handleScroll={this.handleScroll}>
        {this.state.wxResult.map((data, index) => (
          <a href={data.url} key={index}  >
            <Card style={this.props.cardStyle}>
              <CardMedia
                overlay={
                  <CardTitle
                    style={this.props.cardTitleStyle}
                    titleStyle={this.props.titleStyle}
                    subtitleStyle={this.props.subtitleStyle}
                    title={data.title}
                    subtitle={data.ctime} />} >
                <img src={data.picUrl} />
              </CardMedia>
            </Card>
          </a>
        ))}
      </Scroll>
    );
  }
}
