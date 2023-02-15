// import {Button} from '@rneui/base';

import {useMemo} from 'react';
import {ScrollView} from 'react-native';
import {IDiary} from '../../../types/api';
import {AppText} from '../../components/AppText';
import {ListView} from '../../components/Item';
import {useDiary} from '../../query/diary';
import {groupByYear} from '../../utils/date';
import DiaryViewItem from './DiaryViewItem';

const DiaryListView = ListView<IDiary>;

type DiaryViewProps = {};

export default function DiaryView({}: DiaryViewProps) {
  const {data} = useDiary();

  const group = useMemo(
    () => groupByYear(data || [], el => el.date.slice(0, 4)),
    [data],
  );

  return (
    <ScrollView>
      {Object.entries(group).map(([year, entry]) => (
        <DiaryListView
          key={year}
          titleEl={<AppText text={year} />}
          items={entry}
          getId={item => item.id}>
          {DiaryViewItem}
        </DiaryListView>
      ))}
    </ScrollView>
  );
}
