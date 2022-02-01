import React from 'react';
import './style.css';
import Keyboard from './components/Keyboard.js';

export default function App() {
  const keys1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const keys2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const keys3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
  return (
    <div>
      <h1>Wordle</h1>
      <Keyboard keys1={keys1} keys2={keys2} keys3={keys3} />
    </div>
  );
}
