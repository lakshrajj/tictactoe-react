import React, { useState } from 'react';
import Board from './compoments/Board';
import History from './compoments/History';
import StatusMessage from './compoments/StatusMessage';
import { calculateWinner } from './compoments/helpers';
import './styles/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), currentPLayer: true }];

const App = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winningSquare } = calculateWinner(current.board);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.currentPLayer ? 'O' : 'X';
        }
        return square;
      });
      return prev.concat({
        board: newBoard,
        currentPLayer: !last.currentPLayer,
      });
    });

    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        Tic-<span className="text-green">Tak</span>-Toe
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquare={winningSquare}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start New Game
      </button>
      <h3 style={{ fontWeight: 'normal' }}>Current Game Histroy :</h3>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
