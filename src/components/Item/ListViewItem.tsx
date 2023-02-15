export type ListViewItemProps<T> = {
  data: T;
  index: number;
  navigate(): void;
};
