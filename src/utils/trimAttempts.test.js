import trimAttempts from './trimAttempts';

describe('Trim Attempts', () => {
  it('short hand the splitname to "Att. 1"', () => {
    expect(trimAttempts('Attempt 1')).toEqual('Att. 1');
  });
});
