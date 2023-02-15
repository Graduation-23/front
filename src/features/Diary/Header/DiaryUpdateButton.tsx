import {useNavigation} from '@react-navigation/native';
import {Text} from '@rneui/base';
import {Diary} from '../../../constants/screen';

interface DiaryUpdateButtonProps {
  id: number | undefined;
}

export default function DiaryUpdateButton({id}: DiaryUpdateButtonProps) {
  const {navigate} = useNavigation<any>();

  return (
    <Text
      style={{color: '#29b6f6'}}
      onPress={() => {
        if (id) {
          navigate(Diary.Write, {diaryId: id});
        }
      }}>
      수정
    </Text>
  );
}
