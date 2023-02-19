export function removeElementByIndex<T>(array: T[], index: number) {
  const copy = [...array];
  copy.splice(index, 1);
  return copy;
}

export function updateByIndex<T>(array: T[], index: number, newValue: T): T[] {
  const newArray = [...array];
  newArray.splice(index, 1, newValue);
  return newArray;
}
