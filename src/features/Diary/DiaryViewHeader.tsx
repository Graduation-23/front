import {View} from 'react-native';
import DiaryWriteButton from './DiaryWriteButton';

type DiaryViewHeaderProps = {};

export default function DiaryViewHeader({}: DiaryViewHeaderProps) {
  return (
    <View>
      <DiaryWriteButton />
    </View>
  );
}
