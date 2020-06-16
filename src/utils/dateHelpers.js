// @flow
import moment from 'moment';
import type { unitOfTime, MomentObjectOutput } from 'moment';

type Time = string | number;

export const calculateDiff = (time: Time, option: unitOfTime = 'year') => {
  const ts = Number(time);
  return moment().diff(ts ? ts : time, option);
};

export function timeFormat(time: Time, pattern: string): any {
  const timeStamp = Number(time);
  return moment(timeStamp ? timeStamp : time).format(pattern);
}

export function getTimeObj(time: Time): MomentObjectOutput {
  return moment(time).toObject();
}

export function getGeneralDateFormat(time: Time) {
  return timeFormat(time, 'DD MM YYYY HH:mm');
}
