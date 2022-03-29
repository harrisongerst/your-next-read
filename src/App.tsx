import React from 'react';
import './App.css';

interface AppProps {
  test: string
}

function App({test}: AppProps) {
  return (
    <div className="App">
      <h1>{test}</h1>
    </div>
  );
}

export default App;
