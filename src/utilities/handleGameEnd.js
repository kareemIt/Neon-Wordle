export const handleGameEnd = () => {
  const mapLength = Object.values(hashMap).length;
  for (let i = 0; i < mapLength; i++) {
    if (hashMap[word[i]] == 1 && currentRow < 5) {
      break;
    }
    if (hashMap[word[i]] == 1 && currentRow == 5) {
      console.log('hit');
      setGameEnd(word.toLowerCase());
      break;
    }
    setPlayerInput('off');
    setGameEnd('amazing');
  }
};
