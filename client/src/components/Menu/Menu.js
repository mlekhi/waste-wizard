import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div class="folders">
      <div class="tabs">
        <div class="coinbar">
          <div class="bar-item">
            <img class="logo" src="logo192.png"/>
            <h1>Waste Wizard</h1>
          </div>
          <div class="bar-item">
            <img class="coin" src="coin.png"/>
            <p>100</p>
          </div>
        </div>
        <div class="tab">
          <a href="/Play">Play</a>
        </div>
        <div class="tab active">
          <a href="/Debug">Debug</a>
        </div>
        <div class="tab">
          <a href="/Instructor">Instructor</a>
        </div>
        <div class="tab">
          <a href="/Leaderboard">Leaderboard</a>
        </div>
        <div class="tab">
          <a href="/Login">Login</a>
        </div>
        <div class="tab">
          <a href="/Shop">Shop</a>
        </div>
        <div class="tab">
          <a href="/Tutorial">Tutorial</a>
        </div>
      </div>
      <div class="contents">
        <div class="content"></div>
      </div>
    </div>
  );
}

export default Menu;