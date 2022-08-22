import React from "react";

class UserSignupPage extends React.Component {
  state = {
    username: null,
    agreedClicked: false
  };
  onChangeUsername = (event) => {
   this.setState({
    username: event.target.value
   })
  };

  onChangeAgree = event => {
    this.setState({
        agreedClicked: event.target.checked
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
          <input />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <div>
          <label>Password Repeat</label>
          <input type="password" />
        </div>
        <input type="checkbox" onChange={this.onChangeAgree}/> Agreed
        <button disabled={!this.state.agreedClicked}>Sign Up</button>
      </form>
    );
  }
}
export default UserSignupPage;
