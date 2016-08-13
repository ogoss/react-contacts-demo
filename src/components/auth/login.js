import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      checked: false
    };
    this.onAccoutChange = this.onAccoutChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static defaultProps = {
    formStyle: {
      margin: '20px 10px 0'
    },
    innerStyle: {
      padding: '0 10px'
    },
    flatBtnStyle: {
      margin: '5%',
      width: '40%'
    },
    checkBoxStyle: {
      margin: '20px 0'
    }
  }
  onAccoutChange(e) {
    this.setState({
      account: e.target.value
    });
  }
  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }
  onCheckBoxChange(e) {
    this.setState({
      checked: e.target.checked
    })
  }
  handleSubmit() {
    // console.log(this.state.account, this.state.password, this.state.checked);
    // TODO: 提交表单
  }
  render() {
    return (
      <section style={this.props.formStyle}>
        <Paper style={this.props.innerStyle}>
          <TextField
            fullWidth={true}
            floatingLabelText="账号"
            floatingLabelFixed={true}
            onChange={this.onAccoutChange}
            value={this.state.account}
          />
          <TextField
            fullWidth={true}
            floatingLabelText="密码"
            floatingLabelFixed={true}
            type="password"
            onChange={this.onPasswordChange}
            value={this.state.password}
          />
          <Checkbox
            style={this.props.checkBoxStyle}
            label="记住我的登录信息"
            onCheck={this.onCheckBoxChange}
            checked={this.state.checked}
          />
          <RaisedButton
            label="登录"
            fullWidth={true}
            primary={true}
            onClick={this.handleSubmit}
          />
          <FlatButton
            style={this.props.flatBtnStyle}
            label="注册新用户"
          />
          <FlatButton
            style={this.props.flatBtnStyle}
            label="忘记密码?"
          />
        </Paper>
      </section>
    )
  }
}
