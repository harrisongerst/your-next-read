import React from 'react';
import './App.css';
import Book from './components/Book'

interface AppProps {
  test: string
}

function App({test}: AppProps) {
  return (
    <div className="App">
      <h1>{test}</h1>
      <Book/>
    </div>
  );
}

export default App;
