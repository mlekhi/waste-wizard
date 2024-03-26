// make debug + instructor shit show up  by account type

import React, { useState, useEffect } from 'react';
import './Menu.css';

function Menu() {
  const [activeTab, setActiveTab] = useState('/Play');
  const [coins, setCoins] = useState(0); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    window.location.href = tab;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      // Simulating fetching user data from an API
      try {
        const loggedIn = false; // Assume the user is logged in
        setIsLoggedIn(loggedIn);

        // Simulating fetching user's coins
        const coinsData = await fetchCoins(); // Replace fetchCoins with your actual fetch function
        setCoins(coinsData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const fetchCoins = async () => {
    // Simulate fetching coins from an API
    // Replace this with your actual API fetch logic
    return 100; // Simulated user's coins
  };

  return (
    <div class="tabs">
      <div class="coinbar">
        <div class="bar-item">
          <img class="bar-logo" src="logo192.png"/>
        </div>
        <div className={`tab ${activeTab === '/Play' ? 'active' : ''}`} onClick={() => handleTabClick('/Play')}>
          <a href="/Play">Play</a>
        </div>
        <div className={`tab ${activeTab === '/Shop' ? 'active' : ''}`} onClick={() => handleTabClick('/Shop')}>
          <a href="/Shop">Shop</a>
        </div>
        <div className={`tab ${activeTab === '/Leaderboard' ? 'active' : ''}`} onClick={() => handleTabClick('/Leaderboard')}>
          <a href="/Leaderboard">Leaderboard</a>
        </div>
        <div className={`tab ${activeTab === '/Tutorial' ? 'active' : ''}`} onClick={() => handleTabClick('/Tutorial')}>
          <a href="/Tutorial">Tutorial</a>
        </div>
        {isLoggedIn ? (
          <>
            <div className={`tab ${activeTab === '/Debug' ? 'active' : ''}`} onClick={() => handleTabClick('/Debug')}>
              <a href="/Debug">Debug</a>
            </div>
            <div className={`tab ${activeTab === '/Instructor' ? 'active' : ''}`} onClick={() => handleTabClick('/Instructor')}>
              <a href="/Instructor">Instructor</a>
            </div>
            <div className="bar-item">
              <img className="coin" src="coin.png" alt="Coins" />
              <p>{coins}</p>
            </div>
          </>
          ) : (
            <div className={`tab ${activeTab === '/Login' ? 'active' : ''}`} onClick={() => handleTabClick('/Login')}>
              <a href="/Login">Login</a>
            </div>
          )}
      </div>
    </div>
  );
}

export default Menu;