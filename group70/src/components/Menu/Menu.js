import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className="App">
        <a href="/Login">Login</a>
        <a href="/Debug">Debug</a>
        <a href="/Instructor">Instructor</a>
        <a href="/Leaderboard">Leaderboard</a>
        <a href="/Play">Play</a>
        <a href="/Shop">Shop</a>
        <a href="/Tutorial">Tutorial</a>
    </div>
  );
}

export default Menu;