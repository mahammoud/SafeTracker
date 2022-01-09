import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import PotholesNearMePage from './components/PotholesNearMePage/PotholesNearMePage'
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />}></Route>
        <Route exact path='/register' element={<RegisterPage />}></Route>
        <Route exact path='/potholesnm' element={<PotholesNearMePage />}></Route>
        <Route exact path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
