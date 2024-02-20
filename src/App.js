import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:id" component={MovieDetail} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

