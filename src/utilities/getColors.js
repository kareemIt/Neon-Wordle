export const getColors = (userString, word) => {
  const result = Array(5).fill('grey');
  const charCount = new Map();
  for (const char of word) {
    if (!charCount.has(char)) {
      charCount.set(char, 1);
    } else {
      charCount.set(char, charCount.get(char) + 1);
    }
  }

  for (let i = 0; i < word.length; i++) {
    if (userString[i] == word[i]) {
      charCount.set(word[i], charCount.get(word[i]) - 1);
      result[i] = 'green';
    }
  }
  for (let i = 0; i < word.length; i++) {
    if (result[i] != 'grey') {
      continue;
    }
    if (charCount.get(userString[i]) > 0) {
      charCount.set(userString[i], charCount.get(userString[i]) - 1);
      result[i] = 'yellow';
    }
  }
  return result;
};
