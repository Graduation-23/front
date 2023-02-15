import {Fragment} from 'react';
import {View, ViewProps} from 'react-native';
import {ListViewItemProps} from './ListViewItem';

export type ListViewProps<T> = {
  items: T[];
  children(props: ListViewItemProps<T>): JSX.Element;
  getId?(item: T): any;
} & Omit<ViewProps, 'children'>;

export default function ListView<T = unknown>({
  items,
  children,
  getId,
  ...props
}: ListViewProps<T>) {
  return (
    <View {...props}>
      {items.map((el, i) => (
        <Fragment key={getId ? getId(el) : i}>
          {children({index: i, data: el})}
        </Fragment>
      ))}
    </View>
  );
}
