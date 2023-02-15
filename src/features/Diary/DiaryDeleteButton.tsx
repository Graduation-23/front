import {ButtonProps, Button} from '@rneui/base';
import {useDeleteDiary} from '../../query/diary';

interface DiaryDeleteButtonProps extends ButtonProps {
  diaryId: number;
  afterDelete?(): void;
}

export default function DiaryDeleteButton({
  diaryId,
  afterDelete = () => {},
  ...props
}: DiaryDeleteButtonProps) {
  const {mutateAsync: del} = useDeleteDiary();

  return (
    <Button
      {...props}
      onPress={() => {
        del(diaryId).then(afterDelete);
      }}
    />
  );
}
