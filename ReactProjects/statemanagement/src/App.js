import React from 'react';
import MoviesList from './MoviesList';
import './App.css';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
