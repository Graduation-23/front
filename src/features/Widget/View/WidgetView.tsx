interface WidgetViewProps extends Pick<Widget.Type, 'items' | 'totalCost'> {}
import {AppText} from '@/components/AppText';
import {View, StyleSheet} from 'react-native';
import WidgetItem from './WidgetItem';

export default function WidgetView({items, totalCost}: WidgetViewProps) {
  return (
    <View style={styles.SpendList}>
      <AppText.Subtitle
        family="round-d"
        text={`오늘의 지출 - ${totalCost} 원`}
        mv={5}
      />
      {items.map(el => (
        <WidgetItem key={el.id} item={el} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  SpendList: {
    paddingHorizontal: 10,
  },
});
