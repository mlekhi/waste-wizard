// make debug + instructor shit show up  by account type

import React, { useState, useEffect } from 'react';
import './Menu.css';

function Menu() {
  const [activeTab, setActiveTab] = useState('/Play');
  const [coins, setCoins] = useState(0); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  const [isDeveloper, setIsDeveloper] = useState(false);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    window.location.href = tab;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/logged');
        if (!response.ok) {
          throw new Error('Failed to check login status');
        }
        const data = await response.json();
        setIsLoggedIn(false);

        const responseInstructor = await fetch('http://localhost:5000/instructor');
        if (!responseInstructor.ok) {
          throw new Error('Failed to check instructor status');
        }
        const dataInstructor = await responseInstructor.json();
        setIsInstructor(dataInstructor.is_instructor);
  
        // Fetch user role as developer
        const responseDeveloper = await fetch('http://localhost:5000/developer');
        if (!responseDeveloper.ok) {
          throw new Error('Failed to check developer status');
        }
        const dataDeveloper = await responseDeveloper.json();
        setIsDeveloper(dataDeveloper.is_developer);

        
        const coinsData = await fetchCoins();
        setCoins(coinsData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/logout', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Failed to logout');
      }
      setIsLoggedIn(false);
      console.log('Logout Success');
    } catch (error) {
      console.error('Logout Error:', error.message);
    }
  };

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
            {isDeveloper && (
              <div className={`tab ${activeTab === '/Debug' ? 'active' : ''}`} onClick={() => handleTabClick('/Debug')}>
                <a href="/Debug">Debug</a>
              </div>
            )}
            {isInstructor && (
              <div className={`tab ${activeTab === '/Instructor' ? 'active' : ''}`} onClick={() => handleTabClick('/Instructor')}>
                <a href="/Instructor">Instructor</a>
              </div>
            )}
            <div className="bar-item">
              <a href="/" onClick={handleLogout}>Logout</a>
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