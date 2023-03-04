// import {Button} from '@rneui/base';

import {useNavigation} from '@react-navigation/native';
import {useMemo, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {IDiary} from '@type/api';
import {AppText} from '@components/AppText';
import {ListView} from '@components/Item';
import OrderByButton from '@components/OrderByButton';
import {Diary} from '@constants/screen';
import {useDeleteDiary, useDiary} from '@query/diary';
import Utils from '@utils/index';
import DiaryViewItem from './DiaryViewItem';
import {Dialog} from '@rneui/base';
import {useDeleteWidget} from '@/query/widget';

const DiaryListView = ListView<IDiary>;

type DiaryViewProps = {};

const getYear = (el: IDiary) => el.date.slice(0, 4);
const getMMDD = (el: IDiary) => el.date.slice(5);

export default function DiaryView({}: DiaryViewProps) {
  const {data} = useDiary();
  const {navigate} = useNavigation<any>();
  const [order, setOrder] = useState(true);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const {mutate: removeDiary} = useDeleteDiary();
  const {mutate: removeWidget} = useDeleteWidget();

  const group = useMemo(() => Utils.groupByYear(data || [], getYear), [data]);

  const handlePress = (id: number) => navigate(Diary.Read, {diaryId: id});
  const handleLongPress = (id: number) => setSelectedId(id);
  const closeDialog = () => setSelectedId(null);
  const handleConfirmDelete = () => {
    if (selectedId) {
      removeDiary(selectedId);
      removeWidget(selectedId);
    }
    closeDialog();
  };

  return (
    <>
      <ScrollView>
        <View style={styles.toolbar}>
          <OrderByButton ascending={order} setAscending={setOrder} />
        </View>
        <View style={styles.contents}>
          {Utils.orderBy(Object.keys(group), order).map(year => (
            <DiaryListView
              key={year}
              titleEl={<AppText.Subtitle family="round-d" text={year} />}
              items={Utils.orderBy(group[year], order, getMMDD)}
              onPress={handlePress}
              onLongPress={handleLongPress}
              getId={item => item.id}>
              {DiaryViewItem}
            </DiaryListView>
          ))}
        </View>
      </ScrollView>
      <Dialog
        overlayStyle={styles.dialog}
        isVisible={selectedId !== null}
        onBackdropPress={closeDialog}>
        <Dialog.Title title="다이어리 삭제" />
        <AppText family="round-b" text="해당 다이어리를 삭제하시겠습니까?" />
        <Dialog.Actions>
          <Dialog.Button title="예" onPress={handleConfirmDelete} />
          <Dialog.Button title="아니오" onPress={closeDialog} />
        </Dialog.Actions>
      </Dialog>
    </>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  contents: {
    width: '100%',
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  dialog: {
    backgroundColor: 'white',
  },
});
