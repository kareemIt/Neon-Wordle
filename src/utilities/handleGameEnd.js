export const handleGameEnd = (userString, word, currentRow) => {
  for (let i = 0; i < userString.length; i++) {
    if (userString == word && currentRow == 5) {
      return 1;
    }
    if (userString == word && currentRow < 5) {
      return 1;
    }
    if (userString[i] == word[i] && currentRow == 5) {
      return -1;
    }
  }
};
