const handleYellow = () => {
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
