export const handleGreen = (board, currentRow, hashMap, word, rowColor) => {
  const row = board[currentRow];
  const copyMap = { ...hashMap };
  for (let i = 0; i < row.length; i++) {
    const currentLetter = hashMap[row[i]];
    if (word[i] == row[i] && currentLetter != 0) {
      copyMap[row[i]] = copyMap[row[i]] - 1;
      //console.log(copyMap);
      //console.log('worked');
      return rowColor.map((color, index) => {
        if (index == i) {
          return 'green';
        } else {
          return 'grey';
        }
      });
    }
  }
};
export const handleYellow = () => {
  const row = board[currentRow];
  for (let i = 0; i < row.length; i++) {
    const currentLetter = hashMap[board[currentRow][i]];
    if (word.includes(row[i]) && currentLetter != 0) {
      hashMap[row[i]] = hashMap[row[i]] - 1;
      setRowColor(
        rowColor.map((color, index) => {
          if (index == i) {
            return 'yellow';
          }
          if (color == rowColor[i]) {
            return rowColor[i];
          } else {
            return 'grey';
          }
        })
      );
    }
  }
};
