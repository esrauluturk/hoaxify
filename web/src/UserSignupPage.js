import React from "react";

class UserSignupPage extends React.Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null
  };
  onChangeUsername = (event) => {
   this.setState({
    username: event.target.value
   })
  };

  onChangeDisplayName = event => {
    this.setState({
        displayName: event.target.value
    })
  }
  onChangePassword = event => {
    this.setState({
        password: event.target.value
    })
  }
  onChangePasswordRepeat = event => {
    this.setState({
        passwordRepeat: event.target.value
    })
  }
  render() {
    return (
      <form>
        <h1>Sign Up</h1>
        <div>
          <label>Username</label>
          <input onChange={this.onChangeUsername} />
        </div>
        <div>
          <label>Display Name</label>
          <input onChange={this.onChangeDisplayName} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={this.onChangePassword}/>
        </div>
        <div>
          <label>Password Repeat</label>
          <input type="password" onChange={this.onChangePasswordRepeat}/>
        </div>
        
        <button>Sign Up</button>
      </form>
    );
  }
}
export default UserSignupPage;
