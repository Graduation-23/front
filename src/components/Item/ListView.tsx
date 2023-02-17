import {Fragment, ReactNode} from 'react';
import {View, ViewProps} from 'react-native';
import {ListViewItemProps} from './ListViewItem';

export type ListViewProps<T> = {
  items: T[];
  children(props: ListViewItemProps<T>): JSX.Element;
  getId(item: T): string | number;
  titleEl: ReactNode;
  navigate(id: string | number): void;
  remove(id: string | number): void;
} & Omit<ViewProps, 'children'>;

export default function ListView<T = unknown>({
  items,
  children,
  getId,
  titleEl,
  remove,
  navigate,
  ...props
}: ListViewProps<T>) {
  return (
    <View {...props}>
      {titleEl}
      {items.map((el, i) => (
        <Fragment key={getId(el)}>
          {children({
            index: i,
            data: el,
            navigate: navigate.bind(null, getId(el)),
            remove: remove.bind(null, getId(el)),
          })}
        </Fragment>
      ))}
    </View>
  );
}
