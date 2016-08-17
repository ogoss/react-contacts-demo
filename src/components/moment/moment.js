import React from 'react';
import ApiList from '../../apiList';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

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

  fetch(input, init)
    .then((res) => {
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
  render() {
    return (
      <section className="container">
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
      </section>
    );
  }
}
