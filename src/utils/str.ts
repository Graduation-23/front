export function leftPad(value: number) {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
}

export function bindFirstParameter<T extends (...args: any) => any>(
  fn: T,
  firstParameterValue: Parameters<T>[0],
  bindingObject: any = null,
) {
  return fn.bind(bindingObject, firstParameterValue);
}
