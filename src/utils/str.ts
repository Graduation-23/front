export function leftPad(value: number) {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
}
