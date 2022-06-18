import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="histroy">
        {history.map((_, move) => {
          const btncss = {
            color: `#${move === currentMove ? '12e177' : 'fff'}`,
          };
          return (
            <li key={move}>
              <button
                style={btncss}
                type="button"
                onClick={() => {
                  moveTo(move);
                }}
              >
                {move === 0 ? 'Game Started !' : `Go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
