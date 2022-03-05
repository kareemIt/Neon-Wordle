import React, { useState, useEffect } from 'react';
import './style.css';
import Keyboard from './components/Keyboard.js';
import Gameboard from './components/Gameboard.js';
import AutoFocus from './components/AutoFocus';

export default function App() {
  const [currentLetter, setCurrentLetter] = useState(-1);
  const [currentRow, setCurrentRow] = useState(0);
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
    setHashMap(copyMap);
  };

  const handleKeyDown = (word, key) => {
    if (word != '') {
      setCurrentLetter(word.length - 1);
    }
    setBoard(board.map((prevWord, i) => (i === currentRow ? word : prevWord)));
  };

  const handleGreen = () => {
    const row = board[currentRow];
    for (let i = 0; i < board.length - 1; i++) {
      const currentLetter = hashMap[board[currentRow][i]];
      if (word[i] == row[i] && currentLetter != 0) {
        console.log('green ' + row[i] + ' position ' + i);
        hashMap[word[i]] = hashMap[word[i]] - 1;
        setRowColor(
          rowColor.map((color, index) => {
            if (index == i) {
              console.log('green');
              console.log(rowColor);
              return 'green';
            } else {
              console.log('grey');
              return 'grey';
            }
          })
        );
      }
    }
  };
  const handleYellow = () => {
    const row = board[currentRow];
    for (let i = 0; i < board.length - 1; i++) {
      const currentLetter = hashMap[board[currentRow][i]];
      if (word.includes(row[i]) && currentLetter != 0) {
        console.log('yellow ' + row[i] + ' position ' + i);
        hashMap[row[i]] = hashMap[row[i]] - 1;
        setRowColor(
          rowColor.map((color, index) => {
            if (index == i) {
              console.log('yellow');
              return 'yellow';
            }
            if (color == rowColor[i]) {
              console.log(rowColor[i]);
              return rowColor[i];
            } else {
              console.log('grey');
              return 'grey';
            }
          })
        );
      }
    }
  };
  const handleEnter = () => {
    //for loop hashmap check all values are zero say u win
    //add if they run out of rows you lose
    //disable typing either way
    if (board[currentRow].length < 5) {
      return;
    }
    handleGreen();
    handleYellow();
    console.log(rowColor);
    console.log(hashMap);
    setCurrentLetter(0);
    setCurrentRow(currentRow + 1);
    mapOfWord();
  };

  return (
    <div>
      <h1>Wordle</h1>
      <Gameboard
        board={board}
        current={currentLetter}
        currentRow={currentRow}
        rowColor={rowColor}
      />
      <Keyboard keys1={keys1} keys2={keys2} keys3={keys3} />
      <AutoFocus onType={handleKeyDown} onEnter={handleEnter} />
    </div>
  );
}
