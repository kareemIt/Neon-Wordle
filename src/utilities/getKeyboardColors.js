import { getColors } from './getColors';

export const getKeyboardColors = (board, word) => {
  const keyColorMap = new Map();
  for (const row of board) {
    const colors = getColors(row, word);
    for (let i = 0; i < row.length; i++) {
      if (!keyColorMap.has(row[i])) {
        keyColorMap.set(row[i], colors[i]);
      } else if (colors[i] == 'yellow' && keyColorMap.get(row[i]) == 'grey') {
        keyColorMap.set(row[i], colors[i]);
      } else if (colors[i] == 'green' && keyColorMap.get(row[i]) != 'green') {
        console.log('green');
        keyColorMap.set(row[i], colors[i]);
      }
    }
  }
  return keyColorMap;
};
