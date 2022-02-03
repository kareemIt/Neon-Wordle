import React from 'react';

const Gameboard = ({ board }) => {
  return (
    <div className="board-container">
      <div className="board">
        {board.map((letter, index) => (
          <div className="row">
            <span key={index}>{letter}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gameboard;
