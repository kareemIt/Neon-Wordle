import { expect, describe, it } from 'vitest';
import { getColors } from '../handleColors';

// describe('Green Handling', () => {
//   it('changes color', () => {
//     const workedCase = handleGreen(
//       ['C', 'H', 'O', 'K', 'E'],
//       { C: 1, H: 1, O: 1, K: 1, E: 1 },
//       'CHOKE'
//     );
//     expect(workedCase).toEqual({ C: 0, H: 0, O: 0, K: 0, E: 0 });
//   });
//   it('changes color', () => {
//     const greenAlgo = handleGreen(
//       //cooks
//       ['C', 'A', 'K', 'E', 'S'],
//       { C: 1, O: 2, K: 1, S: 1 },
//       'COOKS'
//     );
//     expect(greenAlgo).toEqual({ C: 0, O: 0, K: 0, S: 0 });
//   });
// });
describe('Green Handling Row', () => {
  it('works with all greens', () => {
    const greenRow = getColors('CHOKE', 'CHOKE');
    expect(greenRow).toEqual(['green', 'green', 'green', 'green', 'green']);
  });
  it('will return all grey', () => {
    const greenRow = getColors('AUDII', 'CHOKE');
    expect(greenRow).toEqual(['grey', 'grey', 'grey', 'grey', 'grey']);
  });
  it('has two same letters', () => {
    const greenRow = getColors('OBOES', 'CHOKE');
    expect(greenRow).toEqual(['grey', 'grey', 'green', 'yellow', 'grey']);
  });
  it('has two same letters', () => {
    const greenRow = getColors('KAZOO', 'CHOKE');
    expect(greenRow).toEqual(['yellow', 'grey', 'grey', 'yellow', 'grey']);
  });
});
