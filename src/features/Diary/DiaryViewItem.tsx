import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IDiary} from '../../../types/api';
import {AppText} from '../../components/AppText';
import {ListViewItemProps} from '../../components/Item/ListViewItem';
import {Diary} from '../../constants/screen';
// import CDNImage from '../components/CDNImage';

export default function DiaryViewItem({data}: ListViewItemProps<IDiary>) {
  const {navigate} = useNavigation<any>();

  const handlePress = () => {
    navigate(Diary.Read, {diaryId: data.id});
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <AppText.Subtitle>{data.date.slice(5)}</AppText.Subtitle>
      <View>
        <AppText.Title text={data.title} />
        <AppText text={data.weather} />
        <AppText text={data.content} />
      </View>
    </TouchableOpacity>
  );
}

const bgColor = 'rgba(213, 229, 251, 0.66)';

const styles = StyleSheet.create({
  item: {
    backgroundColor: bgColor,
    borderColor: bgColor,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
});
