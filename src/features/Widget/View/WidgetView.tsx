interface WidgetViewProps extends Pick<Widget.Type, 'items' | 'totalCost'> {}
import {AppText} from '@/components/AppText';
import {View} from 'react-native';
import WidgetItem from './WidgetItem';

export default function WidgetView({items, totalCost}: WidgetViewProps) {
  return (
    <View>
      {items.map(el => (
        <WidgetItem key={el.id} item={el} />
      ))}
      <AppText.Subtitle text={`총 지출 - ${totalCost} ₩`} />
    </View>
  );
}
