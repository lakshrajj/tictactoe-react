import React from 'react';
import Board from './compoments/Board';
import './styles/root.scss';

const App = () => {
  return (
    <div className="app">
      <h1>Tic-Tak-Toe</h1>
      <Board />
    </div>
  );
};

export default App;
