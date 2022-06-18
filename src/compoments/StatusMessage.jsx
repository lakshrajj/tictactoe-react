import React from 'react';

const StatusMessage = ({ winner, current }) => {
  //const message = winner
  //? `Winner is ${winner}`
  //: `Next Player is ${current.currentPLayer ? 'O' : 'X'}`;

  const noMoves = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          {' '}
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && noMoves && (
        <>
          <span className="text-green">Game </span>
          <span className="text-orange">Tied</span>
        </>
      )}
      {!winner && !noMoves && (
        <>
          Next Player is{' '}
          <span
            className={current.currentPLayer ? 'text-green' : 'text-orange'}
          >
            {current.currentPLayer ? 'O' : 'X'}{' '}
          </span>
        </>
      )}
    </div>
  );
};

export default StatusMessage;
