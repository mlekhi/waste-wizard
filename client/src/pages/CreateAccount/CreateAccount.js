import React from 'react';
import './CreateAccount.css';

function CreateAccount() {
  return (
    <div className="App">
      <h1>Create an Account</h1>
      <div className="AccountInfo">
      <div className="AccountSpacing">
      <div className="AccountInput">
        <p>Name: </p>
        <input type="text" id="InfoBox"/>
        </div>
        <div className="AccountInput">
        <p>User ID: </p>
        <input type="text" id="InfoBox"/>
        </div>
        <div className="AccountInput">
        <p>Password:</p>
        <input type="text" id="InfoBox"/>
        </div>
        <div className="AccountInput">
        <p>Re-type password:</p>
        <input type="text" id="InfoBox"/>
        </div>
        
        </div>
        <div className="ButtonBounds">
        <button class = "WWButton">Become a Waste Wizard</button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;