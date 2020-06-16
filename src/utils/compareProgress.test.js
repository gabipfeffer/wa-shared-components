import compareProgress from './compareProgress';

describe('compareProgress', () => {
  it.each`
    state     | msg               | expected
    ${[0, 0]} | ${'empty string'} | ${''}
    ${[1, 1]} | ${'equal'}        | ${'equal'}
    ${[2, 1]} | ${'increase'}     | ${'increase'}
    ${[1, 2]} | ${'decrease'}     | ${'decrease'}
  `('return $msg', ({ state: [prev, next], expected }) => {
    expect(compareProgress(prev, next)).toEqual(expected);
  });
});
