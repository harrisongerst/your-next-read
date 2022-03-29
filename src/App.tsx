import React from 'react';
import './App.css';

interface AppProps {
  test: string
}

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("we hittin");
}

function App({test}: AppProps) {
  return (
    <div className="App">
      <h1>{test}</h1>
      <form>
        <button type="submit" onClick={handleSubmit}>Get Book</button>
      </form>
    </div>
  );
}

export default App;
