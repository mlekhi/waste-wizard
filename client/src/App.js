import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Play from './pages/Play/Play';
import Default from './pages/Default';
import Debug from './pages/Debug';
import Login from './pages/Login';
import Shop from './pages/Shop/Shop';
import Instructor from './pages/Instructor';
import Leaderboard from './pages/Leaderboard';
import Tutorial from './pages/Tutorial';
import CreateAccount from './pages/CreateAccount/CreateAccount';

function App() {
  return (
    <div className="App">
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
<<<<<<< HEAD
=======
            <Route eaxct path="/CreateAccount" element={<CreateAccount />} />
>>>>>>> 7d730149ddd6e8a07ae415e84801e95045632c2d
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
