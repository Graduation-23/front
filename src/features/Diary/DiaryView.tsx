// import {Button} from '@rneui/base';

import {useNavigation} from '@react-navigation/native';
import {useMemo, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {IDiary} from '../../../types/api';
import {AppText} from '../../components/AppText';
import {ListView} from '../../components/Item';
import OrderByButton from '../../components/OrderByButton';
import {Diary} from '../../constants/screen';
import {useDeleteDiary, useDiary} from '../../query/diary';
import {groupByYear, orderBy} from '../../utils/date';
import DiaryViewItem from './DiaryViewItem';

const DiaryListView = ListView<IDiary>;

type DiaryViewProps = {};

const getYear = (el: IDiary) => el.date.slice(0, 4);
const getMMDD = (el: IDiary) => el.date.slice(5);

export default function DiaryView({}: DiaryViewProps) {
  const {data} = useDiary();
  const {navigate} = useNavigation<any>();
  const [order, setOrder] = useState(true);
  const {mutate: remove} = useDeleteDiary();

  const group = useMemo(() => groupByYear(data || [], getYear), [data]);

  const handleNavigation = (id: number) => navigate(Diary.Read, {diaryId: id});
  return (
    <ScrollView>
      <View style={styles.toolbar}>
        <OrderByButton ascending={order} setAscending={setOrder} />
      </View>
      {orderBy(Object.keys(group), order).map(year => (
        <DiaryListView
          key={year}
          titleEl={<AppText text={year} />}
          items={orderBy(group[year], order, getMMDD)}
          navigate={handleNavigation}
          remove={remove}
          getId={item => item.id}>
          {DiaryViewItem}
        </DiaryListView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
