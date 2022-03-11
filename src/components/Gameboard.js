import React from 'react';
import Gamerow from './Gamerow';

const Gameboard = ({ board, currentIndex, currentRow }) => {
  return (
    <div className="board-container">
      <div className="board">
        {board.map((row, rowIndex) => (
          <Gamerow
            currentIndex={currentIndex}
            isActive={currentRow == rowIndex}
            row={row}
            key={rowIndex}
          />
        ))}
      </div>
    </div>
  );
};
export default Gameboard;
