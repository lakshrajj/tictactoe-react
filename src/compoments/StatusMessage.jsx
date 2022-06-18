import React from 'react';

const StatusMessage = ({ winner, current }) => {
  //const message = winner
  //? `Winner is ${winner}`
  //: `Next Player is ${current.currentPLayer ? 'O' : 'X'}`;

  const noMoves = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && noMoves && `Game Tied`}
      {!winner &&
        !noMoves &&
        `Next Player is ${current.currentPLayer ? 'O' : 'X'}`}
    </h2>
  );
};

export default StatusMessage;
