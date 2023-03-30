import {useNavigation} from '@react-navigation/native';
import {Diary} from '@constants/screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface DiaryUpdateButtonProps {
  id: number | undefined;
}

export default function DiaryUpdateButton({id}: DiaryUpdateButtonProps) {
  const {navigate} = useNavigation<any>();

  return (
    <Icon
      name="create"
      size={20}
      onPress={() => {
        if (id) {
          navigate(Diary.Write, {diaryId: id});
        }
      }}
      style={{color: '#1393cf'}}
    />
  );
}
