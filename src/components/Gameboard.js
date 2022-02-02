import React from 'react';

const Gameboard = ({ board }) => {
  return (
    <div className="board-container">
      <div className="board">
        {board.map((letter) => (
          <div className="row">
            <span>{letter}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gameboard;
