import React, { useState, useEffect } from 'react';
import './style.css';
import Keyboard from './components/Keyboard';
import Gameboard from './components/Gameboard';
import AutoFocus from './components/AutoFocus';
import { handleGreen, handleYellow } from './utilities/handleColors';

export default function App() {
  const [currentLetter, setCurrentLetter] = useState(-1);
  const [currentRow, setCurrentRow] = useState(0);
  const [gameEnd, setGameEnd] = useState('');
  const [playerInput, setPlayerInput] = useState('');
  const word = 'CHOKE';
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const [board, setBoard] = useState(['', '', '', '', '', '']);
  const [rowColor, setRowColor] = useState([
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
  ]);
  const [hashMap, setHashMap] = useState({});

  useEffect(() => {
    mapOfWord();
  }, []);

  const mapOfWord = () => {
    const copyMap = { ...hashMap };
    for (let i = 0; i < word.length; i++) {
      if (copyMap[word[i]]) {
        copyMap[word[i]] = copyMap[word[i]] + 1;
      }
      copyMap[word[i]] = 1;
    }
    console.log(copyMap);
    setHashMap(copyMap);
  };
  const handleKeyDown = (word, key) => {
    if (word != '') {
      setCurrentLetter(word.length - 1);
    }
    setBoard(board.map((prevWord, i) => (i === currentRow ? word : prevWord)));
  };

  const handleEnter = () => {
    if (currentRow > 5) {
      return;
    }
    if (board[currentRow].length < 5) {
      return;
    }
    setHashMap(handleGreen(board, currentRow, hashMap, word, rowColor));
    //handleGameEnd();
    //handleYellow();
    // console.log(rowColor);
    // console.log(hashMap);
    setCurrentLetter(0);
    setCurrentRow(currentRow + 1);
    //mapOfWord();
  };

  return (
    <div>
      <h1>Wordle</h1>
      {gameEnd && <p className="answer">{gameEnd}</p>}
      <Gameboard
        board={board}
        current={currentLetter}
        currentRow={currentRow}
        rowColor={rowColor}
      />
      <Keyboard keys1={keys1} keys2={keys2} keys3={keys3} />
      <AutoFocus
        onType={handleKeyDown}
        onEnter={handleEnter}
        playerInput={playerInput}
      />
    </div>
  );
}
