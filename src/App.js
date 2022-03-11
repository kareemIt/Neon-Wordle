import React, { useState, createContext } from 'react';
import './style.css';
import Keyboard from './components/Keyboard';
import Gameboard from './components/Gameboard';
import AutoFocus from './components/AutoFocus';
import { handleGameEnd } from './utilities/handleGameEnd';

export const GameContext = createContext({ word: '', gameEnd: '' });
export default function App() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentRow, setCurrentRow] = useState(0);
  const [gameEnd, setGameEnd] = useState('');
  const [playerInput, setPlayerInput] = useState('');
  const word = 'CHOKE';
  const [board, setBoard] = useState(['', '', '', '', '', '']);

  const handleKeyDown = (word, key) => {
    if (word != '') {
      setCurrentIndex(word.length - 1);
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
    const userString = board[currentRow];
    const winCase = handleGameEnd(userString, word, currentRow);
    setCurrentIndex(0);
    if (winCase == 1) {
      setPlayerInput('off');
      setGameEnd('amazing');
    }
    if (winCase == -1) {
      setPlayerInput('off');
      setGameEnd(word.toLowerCase());
    }
    setCurrentRow(currentRow + 1);
  };

  return (
    <div>
      <GameContext.Provider value={{ word, gameEnd }}>
        <h1>Neon Wordle</h1>
        {gameEnd && <p className="answer">{gameEnd}</p>}
        <Gameboard
          board={board}
          currentIndex={currentIndex}
          currentRow={currentRow}
        />
        <Keyboard board={board} word={word} currentRowIndex={currentRow} />
        <AutoFocus
          onType={handleKeyDown}
          onEnter={handleEnter}
          playerInput={playerInput}
        />
      </GameContext.Provider>
    </div>
  );
}
