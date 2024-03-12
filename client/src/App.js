import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Play from './pages/Play';
import Default from './pages/Default';
import Debug from './pages/Debug';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Instructor from './pages/Instructor';
import Leaderboard from './pages/Leaderboard';
import Tutorial from './pages/Tutorial';

function App() {
  return (
    <div className="App">
      <p>Waste Wizard</p>
      <Router>
        <div>
          <Routes>
            <Route exact path="*" component={Default} />
            <Route exact path="/Default" component={Default} />
            <Route exact path="/Play" component={Play} />
            <Route exact path="/Debug" component={Debug} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Shop" component={Shop} />
            <Route exact path="/Instructor" component={Instructor} />
            <Route exact path="/Leaderboard" component={Leaderboard} />
            <Route exact path="/Tutorial" component={Tutorial} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
