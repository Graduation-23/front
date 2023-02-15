import {Fragment, ReactNode} from 'react';
import {View, ViewProps} from 'react-native';
import {AppText} from '../AppText';
import {ListViewItemProps} from './ListViewItem';

export type ListViewProps<T> = {
  items: T[];
  children(props: ListViewItemProps<T>): JSX.Element;
  getId?(item: T): any;
  titleEl: ReactNode;
} & Omit<ViewProps, 'children'>;

export default function ListView<T = unknown>({
  items,
  children,
  getId,
  titleEl,
  ...props
}: ListViewProps<T>) {
  return (
    <View {...props}>
      {titleEl}
      {items.map((el, i) => (
        <Fragment key={getId ? getId(el) : i}>
          {children({index: i, data: el})}
        </Fragment>
      ))}
    </View>
  );
}
