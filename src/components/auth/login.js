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
      user: '', // 用户名
      pw: '', // 密码
      checked: false, // 是否记住登陆信息
      userErr: '', // 用户名输入错误
      pwErr: '' // 密码输入错误
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.onPWChange = this.onPWChange.bind(this);
    this.onCBChange = this.onCBChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  static defaultProps = {
    form: {
      margin: '20px 10px 0'
    },
    inner: {
      padding: '0 10px'
    },
    flatBtn: {
      margin: '5%',
      width: '40%'
    },
    checkBox: {
      margin: '20px 0'
    }
  }
  onUserChange(e) {
    this.setState({
      user: e.target.value,
      userErr: e.target.value ? '' : '账号不能为空'
    });
  }
  onPWChange(e) {
    this.setState({
      pw: e.target.value,
      pwErr: e.target.value ? '' : '密码不能为空'
    });
  }
  onCBChange(e) {
    this.setState({
      checked: e.target.checked
    })
  }
  submit() {
    // TODO: 登陆状态提示框
    
    // 提交表单，使用setTimeout模拟ajax提交
    let localStorage = window.localStorage;
    setTimeout(()=>{
      if (this.state.user === 'ogoss' && this.state.pw === '123456') {
        // 成功，储存用户数据，并跳转首页
        localStorage.userId = Date.now();
        localStorage.userName = this.state.user;
        localStorage.rembered = this.state.checked;
        localStorage.token = 'token' + Date.now();
        location.href = '#/';
      } else {
        // 失败，弹出提示
      }
    }, 1000);
  }
  render() {
    return (
      <section style={this.props.form}>
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
            label="登录"
            fullWidth={true}
            primary={true}
            onClick={this.submit}
            disabled={!this.state.user || !this.state.pw}
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
