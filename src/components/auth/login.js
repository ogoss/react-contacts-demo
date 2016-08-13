import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class Login extends React.Component {
  static defaultProps = {
    formStyle: {
      margin: '10px auto 10px',
      width: '90%'
    },
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
      <form style={this.props.formStyle}>
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
