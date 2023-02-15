import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IDiary} from '../../../types/api';
import {AppText} from '../../components/AppText';
import {ListViewItemProps} from '../../components/Item/ListViewItem';
// import CDNImage from '../components/CDNImage';

export default function DiaryViewItem({
  data,
  payload,
}: ListViewItemProps<IDiary>) {
  const handlePress = () => {
    payload.navigate('DiaryRead', {diaryId: data.id});
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <View>
        <AppText.Title text={data.title} />
        {/* <AppText.Title text={data.created} /> */}
        <AppText text={data.weather} />
        <AppText text={data.content} />
      </View>
      {/* {Array.isArray(data.images) && data.images.length > 0 ? (
        <CDNImage url={data.images[0]} />
      ) : (
        <></>
      )} */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
});
