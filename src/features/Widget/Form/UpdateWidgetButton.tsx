import {AppText} from '@/components/AppText';
import {useUpdateWidget} from '@/query/widget';
import WidgetUtils from '@/utils/widget';
import {ToastAndroid, Platform, TouchableOpacity} from 'react-native';

interface UpdateWidgetButtonProps {
  widget: Omit<Widget.Type, 'totalCost'>;
}

export default function UpdateWidgetButton({widget}: UpdateWidgetButtonProps) {
  const {mutateAsync: update} = useUpdateWidget(widget.id);
  const handlePress = () => {
    update({
      ...widget,
      items: widget.items.filter(el => !WidgetUtils.isItemEmpty(el)),
      totalCost: WidgetUtils.calcItemsTotalCost(widget.items),
    }).then(() => {
      if (Platform.OS === 'android') {
        ToastAndroid.show('소비기록 저장 완료', ToastAndroid.SHORT);
      }
    });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <AppText family="round-b" text="소비기록 저장" />
    </TouchableOpacity>
  );
}
