import React, { Component } from 'react';
import  { withRouter } from 'react-router-dom'
import './Login.css';

class Login extends Component {
  state = {
    email: null,
    password: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // JUST A PLACEHOLDER
    if (this.state.email === "danygauthier57@yahoo.ca" && this.state.password === "Abc123$"){
      this.props.history.push("/")
    }
    else{
      console.log('There was an error');
    }
  }
  render() {
    return (
        <div id="login_page">
          <div>
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="email" placeholder="Email" id="email" onChange={this.handleChange}/>
            <input type="password" placeholder="Password" id="password" onChange={this.handleChange}/>
            <button type="submit">Submit</button>
          </form>
          </div>
        </div>
    );
  }
}

export default withRouter(Login);