import React, { Component } from 'react';
import  { withRouter } from 'react-router-dom'
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  verifyInput = e =>{
    const regexVal = /^[a-zA-Z0-9_.-]*$/;
    if(regexVal.test(e.target.value)){
      return true;
    }
    else{
      return false;
    }
  }

  handleChange = e => {
    if(!this.verifyInput(e)){
      console.log('Must contain only letter and number');
      return;
    }
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e, data) => {
    e.preventDefault();
    this.props.login(data);
    if(this.props.isLoggedIn) this.props.history.push("/");
  }

  render() {
    return (
      <div id="login_page">
        <div>
          <h2>Login</h2>
          <form onSubmit={e => this.handleSubmit(e, this.state)}>
            <input type="text" placeholder="Username" id="username" onChange={this.handleChange}/>
            <input type="password" placeholder="Password" id="password" onChange={this.handleChange}/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);