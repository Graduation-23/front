import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IDiary} from '../../../types/api';
import {AppText} from '../../components/AppText';
import {ListViewItemProps} from '../../components/Item/ListViewItem';
import DiaryPreviewGallery from './DiaryPreviewGallery';
// import CDNImage from '../components/CDNImage';

export default function DiaryViewItem({
  data,
  navigate,
  remove,
}: ListViewItemProps<IDiary>) {
  return (
    <TouchableOpacity
      onPress={navigate}
      onLongPress={remove}
      style={styles.item}>
      <View style={styles.title}>
        <AppText.Subtitle bold>{data.date.slice(5)}</AppText.Subtitle>
        <AppText style={{paddingLeft: 5}}>{data.title}</AppText>
      </View>
      <View>
        <AppText text={data.weather} />
        <AppText text={data.content} />
      </View>
      <DiaryPreviewGallery
        thumbnailIdx={data.thumbnailIdx}
        imageUrls={data.imageUrls}
      />
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
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
});
