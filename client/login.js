import React, { Component } from 'react';
import { render } from 'react-dom';
import SignUp from './signup.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class LogIn extends React.Component {

  constructor() {
    super();

    this.loginInfo = this.loginInfo.bind(this)
}

render() {


  return (
    <div>
      <table>
          <tbody>
          <tr>
          <th className='header'>CodesmithHub</th>
          </tr>
          <tr>
            <td className='tableContent'>
              <div className='input'>
                <form>
                  <b>Email:</b> <input type='text' id='loginEmail' placeholder='email'/>
                  <br/><br/>
                  <b>Password:</b> <input type='password' id='loginPassword' placeholder='password'/>
                </form>
              </div>
              <br/><br/>
              <button type='submit' onClick={this.loginInfo}>LogIn</button>
              <button>
                <Link to='/signup'>Signup</Link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
      {this.props.children}
      </div>
    </div>
  )

}


componentDidMount() {

}

  loginInfo() {
    let data = {
      email: document.getElementById('loginEmail').value,
      password: document.getElementById('loginPassword').value
    }

    axios.post('/login', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


}








export default LogIn;
