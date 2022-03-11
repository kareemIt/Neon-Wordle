import React, { useContext } from 'react';
import '../style.css';
import { getColors } from '../utilities/getColors';
import { GameContext } from '../App';

const Gamerow = ({ currentIndex, isActive, row }) => {
  const { gameEnd, word } = useContext(GameContext);
  const colors = getColors(row, word);
  const getFocusClass = (index) => {
    if (gameEnd) {
      return '';
    }
    if (index == currentIndex && isActive) {
      return 'current';
    } else {
      return '';
    }
  };
  const getColorClass = (index) => {
    if (isActive || !row) {
      return '';
    } else {
      return colors[index];
    }
  };

  return (
    <div className="row">
      {[...row.padEnd(5, ' ')].map((letter, index) => (
        <div
          className={`letter ${getFocusClass(index)} ${getColorClass(index)}`}
          key={index}
        >
          <span>{letter}</span>
        </div>
      ))}
    </div>
  );
};

export default Gamerow;
