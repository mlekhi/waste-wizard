import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="App">
      <h1>Login</h1>
      <div className="TestInfo">
      <div className="LoginSpacing">
        <div className="LoginInput">
        <p>User ID: </p>
        <input type="text" id="InfoBox"/>
        </div>
        <div className="LoginInput">
        <p>Password:</p>
        <input type="text" id="InfoBox"/>
        </div>
        </div>
        <div className="ButtonBounds">
        <button class = "LoginButton">Login</button>
        
        </div>
        <div className="LoginPadding">
        <a href="http://localhost:3000/CreateAccount">Don't have an account?</a>
        </div>
      </div>
      <img src="TrashBag.png" class="TrashBag"></img>
    </div>
  );
}

export default Login;


