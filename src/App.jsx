import React, { useState } from 'react';
import Board from './compoments/Board';
import { calculateWinner } from './compoments/helpers';
import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPLayer, nextPlayer] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${currentPLayer ? 'O' : 'X'}`;

  console.log(winner);
  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return currentPLayer ? 'O' : 'X';
        }
        return square;
      });
    });
    nextPlayer(prev => !prev);
  };

  return (
    <div className="app">
      <h1>Tic-Tak-Toe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
