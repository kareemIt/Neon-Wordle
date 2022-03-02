import React from 'react';

const padArray = (arr, length) => {
  if (length <= arr.length) return [...arr];
  const filler = Array(length - arr.length);
  return [...arr, ...filler];
};
const Gameboard = ({ board, current, currentRow }) => {
  return (
    <div className="board-container">
      <div className="board">
        {board.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {padArray(row, 5).map((letter, index) => (
              <div className="letter" key={index}>
                <span
                  className={
                    index == current && currentRow == rowIndex ? 'current' : ''
                  }
                  key={index}
                >
                  {letter}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gameboard;
