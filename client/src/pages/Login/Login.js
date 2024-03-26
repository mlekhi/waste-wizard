import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="App">
      <h1>Login</h1>
      <div className="Info">
      <div className="Spacing">
        <div className="Input">
        <p>User ID: </p>
        <input type="text" id="InfoBox"/>
        </div>
        <div className="Input">
        <p>Password:</p>
        <input type="text" id="InfoBox"/>
        </div>
        </div>
        <div className="ButtonBounds">
        <button class = "LoginButton">Login</button>
        
        </div>
        <div className="Padding">
        <a href="http://localhost:3000/CreateAccount">Don't have an account?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;


