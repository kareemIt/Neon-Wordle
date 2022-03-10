export const handleGreen = (row, hashMap, word) => {
  const copyMap = { ...hashMap };
  for (let i = 0; i < row.length; i++) {
    const currentLetter = hashMap[row[i]];
    if (word[i] == row[i] && currentLetter != 0) {
      copyMap[row[i]] = copyMap[row[i]] - 1;
    }
  }
  return copyMap;
};
export const handleYellow = (row, hashMap, word) => {
  const copyMap = { ...hashMap };
  for (let i = 0; i < row.length; i++) {
    const currentLetter = hashMap[row[i]];
    if (word.includes(row[i]) && currentLetter != 0) {
      copyMap[row[i]] = copyMap[row[i]] - 1;
    }
  }
  return copyMap;
};
export const handleColorGreen = (rowColor, hashMap, word) => {
  return rowColor.map((color, index) => {
    if (hashMap[word[index]] == 0) {
      return 'green';
    } else {
      return 'grey';
    }
  });
};
export const handleColorYellow = (rowColor, hashMap, word) => {
  return rowColor.map((color, index) => {
    if (color == 'green') {
      return 'green';
    }
    if (hashMap[word[index]] == 0) {
      return 'yellow';
    } else {
      return 'grey';
    }
  });
};
