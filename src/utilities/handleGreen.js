const handleGreen = () => {
  const row = board[currentRow];
  const copyMap = { ...hashMap };
  for (let i = 0; i < row.length; i++) {
    const currentLetter = hashMap[row[i]];
    if (word[i] == row[i] && currentLetter != 0) {
      copyMap[row[i]] = copyMap[row[i]] - 1;
      setRowColor(
        rowColor.map((color, index) => {
          if (index == i) {
            return 'green';
          } else {
            return 'grey';
          }
        })
      );
    }
  }
  console.log(copyMap);
  setHashMap(copyMap);
};