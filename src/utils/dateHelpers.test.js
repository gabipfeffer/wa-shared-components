import { timeFormat, getTimeObj } from './dateHelpers';

describe('dateHelpers', () => {
  it('timeFormat', () => {
    const time = timeFormat(
      new Date('Mon Jul 29 2019 22:20:11 GMT+0100 (British Summer Time)'),
      'HH:mm'
    );

    expect(time).toEqual('22:20');
  });

  it('timeFormat format timestamp', () => {
    const tStamp = new Date(
      'Mon Jul 29 2018 22:20:11 GMT+0100 (British Summer Time)'
    ).getTime();
    const time = timeFormat(tStamp, 'HH:mm');

    expect(time).toEqual('22:20');
  });

  it('getTimeObj', () => {
    const obj = getTimeObj(
      new Date('Mon Jul 29 2018 22:20:11 GMT+0100 (British Summer Time)')
    );

    expect(obj).toEqual({
      date: 29,
      hours: 22,
      milliseconds: 0,
      minutes: 20,
      months: 6,
      seconds: 11,
      years: 2018
    });
  });
});
