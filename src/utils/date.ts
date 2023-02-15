import {leftPad} from './str';

export function formatYMD(date: Date) {
  const year = date.getFullYear();
  const month = leftPad(date.getMonth() + 1);
  const day = leftPad(date.getDate());
  return [year, month, day].join('-');
}

export function groupByYear<T>(entry: T[], getYear: (element: T) => string) {
  return entry.reduce((acc, cur) => {
    const year = getYear(cur);

    if (Array.isArray(acc[year])) {
      acc[year].push(cur);
    } else {
      acc[year] = [cur];
    }

    return acc;
  }, {} as {[key: string]: T[]});
}
