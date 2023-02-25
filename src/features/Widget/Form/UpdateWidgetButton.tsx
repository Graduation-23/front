import {useUpdateWidget} from '@/query/widget';
import WidgetUtils from '@/utils/widget';
import {Button} from '@rneui/base';
import {ToastAndroid, Platform} from 'react-native';

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
        ToastAndroid.show('수정 완료', ToastAndroid.SHORT);
      }
    });
  };
  return <Button onPress={handlePress}>저장</Button>;
}
