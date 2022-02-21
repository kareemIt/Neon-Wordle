import React, { useState } from 'react';
import './style.css';
import Keyboard from './components/Keyboard.js';
import Gameboard from './components/Gameboard.js';
import AutoFocus from './components/AutoFocus';

export default function App() {
  const [lettersLeft, useLettersLeft] = useState(5);
  const [currentRow, setCurrentRow] = useState(0);
  const word = 'hello';
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const [board, setBoard] = useState(['', '', '', '', '', '']);

  const handleKeyDown = (word, key) => {
    setBoard(board.map((prevWord, i) => (i === currentRow ? word : prevWord)));
  };
  const handleEnter = () => {
    setCurrentRow(currentRow + 1);
  };

  return (
    <div>
      <h1>Wordle</h1>
      <Gameboard board={board} />
      <Keyboard keys1={keys1} keys2={keys2} keys3={keys3} />
      <AutoFocus onType={handleKeyDown} onEnter={handleEnter} />
    </div>
  );
}
