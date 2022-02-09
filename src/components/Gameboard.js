import React from 'react';

const Gameboard = ({ board }) => {
  return (
    <div className="board-container">
      <div className="board">
        {board.map((letter, index) => (
          <div className="row">
            {/* {_.map(letter) => (
              <div>
                <span>hi</span>
                </div>
            ))} */}
            <span className="yellow" key={index}>
              h{letter}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gameboard;
