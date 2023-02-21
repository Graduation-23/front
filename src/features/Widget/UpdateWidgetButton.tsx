import {useUpdateWidget} from '@/query/widget';
import WidgetUtils from '@/utils/widget';
import {Button} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import {Diary} from '@constants/screen';

interface UpdateWidgetButtonProps {
  widget: Omit<Widget.Type, 'totalCost'>;
}

export default function UpdateWidgetButton({widget}: UpdateWidgetButtonProps) {
  const {mutateAsync: update} = useUpdateWidget(widget.id);
  const {navigate} = useNavigation<any>();
  const handlePress = () => {
    update({
      ...widget,
      items: widget.items.filter(el => !WidgetUtils.isItemEmpty(el)),
      totalCost: WidgetUtils.calcItemsTotalCost(widget.items),
    }).then(id => {
      navigate(Diary.Read, {diaryId: id});
    });
  };
  return <Button onPress={handlePress}>저장</Button>;
}
