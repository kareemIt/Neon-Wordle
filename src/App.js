import React from 'react';
import './style.css';
import Keyboard from './components/Keyboard.js';
import Gameboard from './components/Gameboard.js';

export default function App() {
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const board = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];
  return (
    <div>
      <h1>Wordle</h1>
      <Gameboard board={board} />
      <Keyboard keys1={keys1} keys2={keys2} keys3={keys3} />
    </div>
  );
}
