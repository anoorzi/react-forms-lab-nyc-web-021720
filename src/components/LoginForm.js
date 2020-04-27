import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: 'username',
      password: 'password'
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  doLogin = (event) =>{
    event.preventDefault()
    let obj = {
      username:this.state.username,
      password:this.state.password
    }
    if(obj.username !== '' && obj.password !== ''){
      this.props.handleLogin(obj)

    }
  }

  render() {
    return (
      <form onSubmit={this.doLogin}>
        <div >
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
