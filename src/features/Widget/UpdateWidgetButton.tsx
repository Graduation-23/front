import {useUpdateWidget} from '@/query/widget';
import WidgetUtils from '@/utils/widget';
import {Button} from '@rneui/base';

interface UpdateWidgetButtonProps {
  widget: Omit<Widget.Type, 'totalCost'>;
}

export default function UpdateWidgetButton({widget}: UpdateWidgetButtonProps) {
  const {mutateAsync: update} = useUpdateWidget();

  const handlePress = () => {
    update({
      ...widget,
      totalCost: WidgetUtils.calcItemsTotalCost(widget.items),
    });
  };

  return <Button onPress={handlePress}>저장</Button>;
}
