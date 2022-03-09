export const handleGreen = (board, currentRow, hashMap, word) => {
  const row = board[currentRow];
  const copyMap = { ...hashMap };
  for (let i = 0; i < row.length; i++) {
    const currentLetter = hashMap[row[i]];
    if (word[i] == row[i] && currentLetter != 0) {
      copyMap[row[i]] = copyMap[row[i]] - 1;
    }
  }
  console.log(copyMap);
  return copyMap;
};
export const handleYellow = (board, currentRow, hashMap, word) => {
  const row = board[currentRow];
  const copyMap = { ...hashMap };
  for (let i = 0; i < row.length; i++) {
    const currentLetter = hashMap[board[currentRow][i]];
    if (word.includes(row[i]) && currentLetter != 0) {
      hashMap[row[i]] = hashMap[row[i]] - 1;
    }
  }
  return copyMap;
};
export const handleColorGreen = (rowColor, hashMap, word) => {
  return rowColor.map((color, index) => {
    console.log(color);
    if (hashMap[word[index]] == 0) {
      return 'green';
    } else {
      return 'grey';
    }
  });
};
export const handleColorYellow = (rowColor, hashMap, word) => {
  //console.log('handleYellow');
  return rowColor.map((color, index) => {
    //console.log(color);
    if (color == 'green') {
      //console.log('green');
      return 'green';
    }
    if (hashMap[word[index]] == 0) {
      //onsole.log('yellow');
      return 'yellow';
    } else {
      //console.log('grey');
      return 'grey';
    }
  });
};
