import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '', // 用户名
      pw: '', // 密码
      checked: false, // 是否记住登陆信息
      userErr: '', // 用户名输入错误
      pwErr: '', // 密码输入错误
      disabled: true, // 是否禁用提交按钮
      context: '登陆', // 登陆按钮文字
      opened: false, // 是否显示提示框
      loginErr: '' // 登陆失败提示
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.onPWChange = this.onPWChange.bind(this);
    this.onCBChange = this.onCBChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRequestClose = this.onRequestClose.bind(this);
  }
  static defaultProps = {
    form: {
      margin: '20px 10px 0'
    },
    inner: {
      padding: '0 10px'
    },
    flatBtn: {
      width: '40%',
      margin: '5%'
    },
    checkBox: {
      margin: '20px 0'
    }
  }
  onUserChange(e) {
    let value = e.target.value;
    this.setState({
      user: value,
      userErr: value ? '' : '账号不能为空',
      disabled: !value || !this.state.pw
    });
  }
  onPWChange(e) {
    let value = e.target.value;
    this.setState({
      pw: value,
      pwErr: value ? '' : '密码不能为空',
      disabled: !this.state.user || !value
    });
  }
  onCBChange(e) {
    this.setState({
      checked: e.target.checked
    });
  }
  onSubmit() {
    // 提交表单，使用setTimeout模拟ajax提交
    let localStorage = window.localStorage;
    this.setState({
      disabled: true,
      context: '登陆中。。。'
    });
    setTimeout(() => {
      if (this.state.user === 'ogoss' && this.state.pw === '123456') {
        // 成功，储存用户数据，并跳转首页
        localStorage.userId = Date.now();
        localStorage.userName = this.state.user;
        localStorage.rembered = this.state.checked;
        localStorage.token = 'token' + Date.now();
        location.href = '#/';
      } else {
        // 失败，弹出提示
        this.setState({
          loginErr: '账号或密码错误！',
          opened: true
        });
      }
      this.setState({
        disabled: false,
        context: '登陆'
      });
    }, 1000);
  }
  onRequestClose() {
    this.setState({
      opened: false
    });
  }
  render() {
    return (
      <section style={this.props.form}>
        <Snackbar
          open={this.state.opened}
          message={this.state.loginErr}
          autoHideDuration={4000}
          onRequestClose={this.onRequestClose}
        />
        <Paper style={this.props.inner}>
          <TextField
            fullWidth={true}
            floatingLabelText="账号"
            floatingLabelFixed={true}
            onChange={this.onUserChange}
            value={this.state.user}
            errorText={this.state.userErr}
          />
          <TextField
            fullWidth={true}
            floatingLabelText="密码"
            floatingLabelFixed={true}
            type="password"
            onChange={this.onPWChange}
            value={this.state.pw}
            errorText={this.state.pwErr}
          />
          <Checkbox
            style={this.props.checkBox}
            label="记住我的登录信息"
            onCheck={this.onCBChange}
            checked={this.state.checked}
          />
          <RaisedButton
            label={this.state.context}
            fullWidth={true}
            primary={true}
            onClick={this.onSubmit}
            disabled={this.state.disabled}
          />
          <FlatButton
            style={this.props.flatBtn}
            label="注册新用户"
          />
          <FlatButton
            style={this.props.flatBtn}
            label="忘记密码?"
          />
        </Paper>
      </section>
    )
  }
}
