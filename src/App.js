import React, { useState } from 'react';
import './style.css';
import Keyboard from './components/Keyboard.js';
import Gameboard from './components/Gameboard.js';
import AutoFocus from './components/AutoFocus';

export default function App() {
  const [currentLetter, setCurrentLetter] = useState(-1);
  const [currentRow, setCurrentRow] = useState(0);
  const word = 'hello';
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const [board, setBoard] = useState(['', '', '', '', '', '']);
  const hashMap = new Map();

  const mapOfWord = (hashMap) => {
    for (let i = 0; i < word.length; i++) {
      if (hashMap.has(word[i])) {
        hashMap.set(word[i], hashMap.get(word[i]) + 1);
        continue;
      }
      hashMap.set(word[i], 1);
    }
  };
  mapOfWord(hashMap);

  const handleKeyDown = (word, key) => {
    if (word != '') {
      setCurrentLetter(word.length - 1);
    }
    setBoard(board.map((prevWord, i) => (i === currentRow ? word : prevWord)));
  };
  const handleEnter = () => {
    if (board.length < 5) return;
    console.log(board.length);
    for (let i = 0; i < board.length; i++) {
      if (word[i] == board[i]) {
        console.log('green');
        continue;
      }
      console.log('not here');
    }
    for (let i = 0; i < board.length; i++) {
      if (word.includes(board[i])) {
        console.log('yellow');
      }
    }
    setCurrentLetter(0);
    setCurrentRow(currentRow + 1);
  };

  return (
    <div>
      <h1>Wordle</h1>
      <Gameboard
        board={board}
        current={currentLetter}
        currentRow={currentRow}
      />
      <Keyboard keys1={keys1} keys2={keys2} keys3={keys3} />
      <AutoFocus onType={handleKeyDown} onEnter={handleEnter} />
    </div>
  );
}
