import mapSexName from './mapSexName';

describe('mapSexName', () => {
  it('returns Male when given Men', () => {

    const result = mapSexName('Men');

    expect(result).toEqual('Male');
  });

  it('returns Female when given Woman', () => {

    const result = mapSexName('Women');

    expect(result).toEqual('Female');
  });
});
