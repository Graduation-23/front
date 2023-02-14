import {leftPad} from './str';

export function formatYMD(date: Date) {
  const year = date.getFullYear();
  const month = leftPad(date.getMonth() + 1);
  const day = leftPad(date.getDate());
  return [year, month, day].join('-');
}
