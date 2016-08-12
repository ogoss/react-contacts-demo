import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class LoginPage extends React.Component {
  static defaultProps = {
    flatBtnStyle: {
      margin: '20px 0 0 0',
      width: '50%'
    },
    checkBoxStyle: {
      margin: '20px 0'
    }
  }
  render() {
    return(
      <form className="formBox">
        <TextField
          fullWidth={true}
          floatingLabelText="Username"
          floatingLabelFixed={true}
        />
        <TextField
          fullWidth={true}
          floatingLabelText="Password"
          floatingLabelFixed={true}
          type="password"
        />
        <Checkbox style={this.props.checkBoxStyle} label="Remember me" />
        <RaisedButton label="Sign in" fullWidth={true} primary={true} />
        <FlatButton
          style={this.props.flatBtnStyle}
          label="Register Now!"
        />
        <FlatButton
          style={this.props.flatBtnStyle}
          label="Forget Password?"
        />
      </form>
    )
  }
}
