import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Series from '../components/Series';
import Films from '../components/Films';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/films" element={<Films />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
