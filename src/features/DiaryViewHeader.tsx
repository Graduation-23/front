import {Button} from '@rneui/base';
import {View} from 'react-native';
import {AppText} from '../components/AppText';

type DiaryViewHeaderProps = {
  navigateToWrite(): void;
};

export default function DiaryViewHeader({
  navigateToWrite,
}: DiaryViewHeaderProps) {
  return (
    <View>
      <Button onPress={navigateToWrite}>
        <AppText.Title text="Write" />
      </Button>
    </View>
  );
}
