import React from 'react';

const Gameboard = ({ board }) => {
  return (
    <div className="board-container">
      {board.map((letter) => (
        <div>
          <span>{letter}</span>
        </div>
      ))}
    </div>
  );
};
export default Gameboard;
