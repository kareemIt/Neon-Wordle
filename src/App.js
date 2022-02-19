import React, { useState, useEffect } from 'react';
import './style.css';
import Keyboard from './components/Keyboard.js';
import Gameboard from './components/Gameboard.js';

export default function App() {
  const [lettersLeft, useLettersLeft] = useState(5);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentRow, setCurrentRow] = useState(0);
  const word = 'hello';
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const board = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ];

  const handleKeyDown = (event) => {
    //if (event.key == 'ENTER' && lettersLeft == 0) sumbitted;
    if (currentPosition > 5) return;
    if (event.key == 'BACKSPACE');
    const currentKey = event.key.toUpperCase();
    board[currentRow][currentPosition] = currentKey;
    setCurrentPosition((num) => num + 1);
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  // const sumbitted = () => {
  //   for (let i = 0; i < board.length; i++) {
  //     if (word.includes(board[i])) {
  //       //yellow
  //       if (word.indexOf(a) == board[i]) {
  //         //green
  //       }
  //     }
  //   }
  //check the board and compare it to the word
  //for loop throuh array compare letters on gameboard with the word
  //then add grey/yellow/green class to gameboard/Keyboard
  //reset numberLetters
  // };

  return (
    <div onKeyDown={handleKeyDown}>
      <h1>Wordle</h1>
      <Gameboard board={board} />
      <Keyboard keys1={keys1} keys2={keys2} keys3={keys3} />
    </div>
  );
}
