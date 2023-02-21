export type ListViewItemProps<T> = {
  data: T;
  index: number;
  onPress(): void;
  onLongPress(): void;
};
