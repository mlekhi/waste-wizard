import React from 'react';
import './CreateAccount.css';

function CreateAccount() {
  return (
    <div className="App">
      <h1>Create an Account</h1>
      <div className="Info">
      <div className="Spacing">
      <div className="Input">
        <p>Name: </p>
        <input type="text" id="InfoBox"/>
        </div>
        <div className="Input">
        <p>User ID: </p>
        <input type="text" id="InfoBox"/>
        </div>
        <div className="Input">
        <p>Password:</p>
        <input type="text" id="InfoBox"/>
        </div>
        <div className="Input">
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