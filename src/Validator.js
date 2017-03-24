import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
 constructor (props) {
   super(props)
   this.state = {
     email: '',
     password: '',
     passwordConfirm: ''
    //  valid: true
  };

  // this.validEmail = this.validEmail.bind(this);
  // this.validPassword = this.validPassword.bind(this);
  // this.validPasswordConfirm = this.validPasswordConfirm.bind(this);
  // this.validEmail = this.validEmail.bind(this);

 }

 handleEmail (e) {
   this.setState({email: e.target.value})
 }

 handlePassword (e) {
   this.setState({password: e.target.value})
 }

 handlePasswordConfirm (e) {
   this.setState({passwordConfirm: e.target.value})
 }

 handleSubmit (e) {
   e.preventDefault()
   this.checkValidity()
 }

 checkValidity () {
   if (this.state.password === this.state.passwordConfirm) {
      alert("Logged IN...")
    } else {
      alert("Failure...Retry...")
    }
 }

  render() {
    return (
      <form onSubmit={this.checkValidity}>
        <h1>Sign Up</h1>
        <input type="text" value={this.state.user} placeholder="email" onChange={this.handleEmail}/>
        <input type="password" value={this.state.password} placeholder="password" onChange={this.handlePassword} />
        <input type="password" value={this.state.passwordConfirm} placeholder="confirm password" onChange={this.handleSubmit}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Validator;
