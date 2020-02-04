import React from 'react';
import './App.css';
import SampleCompnent from './components/SampleComponent';

function App() {
  const sampleObject = {
    title: 'Sample title',
    price: 10.15,
  };
  return (
    <div className="App">
      <header className="App-header">
        <SampleCompnent sampleObject={sampleObject} />
      </header>
    </div>
  );
}

export default App;
