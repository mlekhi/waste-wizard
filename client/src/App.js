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
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
        <div>
          <Routes>
            <Route exact path="*" element={<Default />} />
            <Route exact path="/Default" element={<Default />} />
            <Route exact path="/Play" element={<Play />} />
            <Route exact path="/Debug" element={<Debug />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Shop" element={<Shop />} />
            <Route exact path="/Instructor" element={<Instructor />} />
            <Route exact path="/Leaderboard" element={<Leaderboard />} />
            <Route exact path="/Tutorial" element={<Tutorial />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
