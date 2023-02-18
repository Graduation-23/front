export function removeElementByIndex<T>(array: T[], index: number) {
  const copy = [...array];
  copy.splice(index, 1);
  return copy;
}
