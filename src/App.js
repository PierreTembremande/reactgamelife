import './App.css';
import { useState } from 'react';
import { Grille, ComportementGrille } from './composants/Grille/grille';

function App() {
  return (
    <div className="App">
      <Grille length={50} />
    </div >
  );
}

export default App;
