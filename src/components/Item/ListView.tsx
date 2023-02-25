import {Fragment, ReactNode} from 'react';
import {View, ViewProps} from 'react-native';
import {ListViewItemProps} from './ListViewItem';

export type ListViewProps<T> = {
  items: T[];
  children(props: ListViewItemProps<T>): JSX.Element;
  getId(item: T): string | number;
  titleEl: ReactNode;
  onPress(id: string | number): void;
  onLongPress(id: string | number): void;
} & Omit<ViewProps, 'children'>;

export default function ListView<T = unknown>({
  items,
  children,
  getId,
  titleEl,
  onLongPress,
  onPress,
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
            onPress: onPress.bind(null, getId(el)),
            onLongPress: onLongPress.bind(null, getId(el)),
          })}
        </Fragment>
      ))}
    </View>
  );
}
