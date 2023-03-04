import {StyleSheet, TouchableOpacity, View, Platform} from 'react-native';
import {IDiary} from '@type/api';
import {AppText} from '@components/AppText';
import {ListViewItemProps} from '@components/Item/ListViewItem';
import DiaryPreviewGallery from './DiaryPreviewGallery';
// import CDNImage from '@components/CDNImage';

export default function DiaryViewItem({
  data,
  onPress,
  onLongPress,
}: ListViewItemProps<IDiary>) {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.view}>
        <View style={styles.title}>
          <AppText.Subtitle family="round-d">
            {data.date.substring(5, 7) + '/' + data.date.substring(8) + ' '}
          </AppText.Subtitle>
          <AppText family="round-b" text={'날씨 : ' + data.weather} />
        </View>
        <View style={styles.contents}>
          <AppText.Subtitle family="round-b">
            {'제목 : ' + data.title}
          </AppText.Subtitle>
          <AppText family="round-b" text={data.content} />
        </View>
        <DiaryPreviewGallery
          thumbnailIdx={data.thumbnailIdx}
          imageUrls={data.imageUrls}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#c8e6fe',
    borderRadius: 20,
    padding: 20,
    marginTop: 5,
    marginBottom: 20,
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  contents: {
    paddingTop: 10,
  },
});
