import React from 'react';
import './App.css';
import Jan from './components/Jan';
import March from './components/March';
import April from './components/April';
import June from './components/June';
import July from './components/July';

function App() {
  return (
    <div className="App">
      <Jan />
      <March />
      <April />
      <June />
      <July />
    </div>
  );
}

export default App;
