// import {Button} from '@rneui/base';

import {useNavigation} from '@react-navigation/native';
import {useMemo} from 'react';
import {ScrollView} from 'react-native';
import {IDiary} from '../../../types/api';
import {AppText} from '../../components/AppText';
import {ListView} from '../../components/Item';
import {Diary} from '../../constants/screen';
import {useDiary} from '../../query/diary';
import {groupByYear} from '../../utils/date';
import DiaryViewItem from './DiaryViewItem';

const DiaryListView = ListView<IDiary>;

type DiaryViewProps = {};

export default function DiaryView({}: DiaryViewProps) {
  const {data} = useDiary();

  const {navigate} = useNavigation<any>();

  const group = useMemo(
    () => groupByYear(data || [], el => el.date.slice(0, 4)),
    [data],
  );

  const handleNavigation = (id: number) => {
    navigate(Diary.Read, {diaryId: id});
  };

  return (
    <ScrollView>
      {Object.entries(group).map(([year, entry]) => (
        <DiaryListView
          key={year}
          titleEl={<AppText text={year} />}
          items={entry}
          navigate={handleNavigation}
          getId={item => item.id}>
          {DiaryViewItem}
        </DiaryListView>
      ))}
    </ScrollView>
  );
}
