import React from 'react';

const padArray = (arr, length) => {
  if (length <= arr.length) return [...arr];
  const filler = Array(length - arr.length);
  return [...arr, ...filler];
};
const Gameboard = ({ board }) => {
  return (
    <div className="board-container">
      <div className="board">
        {board.map((row, index) => (
          <div className="row">
            {padArray(row, 5).map((letter, index) => (
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
