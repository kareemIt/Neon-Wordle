import React from 'react';
import '../style.css';
import { getKeyboardColors } from '../utilities/getKeyboardColors';

const Keyboard = ({ board, word, currentRowIndex }) => {
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const colorsMap = getKeyboardColors(board.slice(0, currentRowIndex), word);
  return (
    <div className="keyboard">
      <div className="row">
        {keys1.map((key, index) => (
          <div className={`letter ${colorsMap.get(key)}`} key={index}>
            <span>{key}</span>
          </div>
        ))}
      </div>
      <div className="row">
        {keys2.map((key, index) => (
          <div className={`letter ${colorsMap.get(key)}`} key={index}>
            <span>{key}</span>
          </div>
        ))}
      </div>
      <div className="row">
        {keys3.map((key, index) => (
          <div className={`letter ${colorsMap.get(key)}`} key={index}>
            <span>{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
