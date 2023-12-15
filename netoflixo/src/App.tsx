import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Series from '../components/Series';
import Films from '../components/Films';
import NewsWatched from '../components/NewsWatched';
import MyList from '../components/MyList';
import OriginalAudio from '../components/OriginalAudio';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/browse" element={<Home />} />
          <Route path="/browse/series" element={<Series />} />
          <Route path="/browse/films" element={<Films />} />
          <Route path="/latest" element={<NewsWatched />} />
          <Route path="/browse/my-list" element={<MyList />} />
          <Route path="/browse/original-audio" element={<OriginalAudio />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
