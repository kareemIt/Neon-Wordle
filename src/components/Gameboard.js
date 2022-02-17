import React from 'react';

const Gameboard = ({ board }) => {
  return (
    <div className="board-container">
      <div className="board">
        {board.map((row, index) => (
          <div className="row">
            {row.map((letter, index) => (
              <div className="letter">
                <span>{letter}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gameboard;
