// import {Button} from '@rneui/base';

import {ScrollView} from 'react-native';
import {IDiary} from '../../../types/api';
import {ListView} from '../../components/Item';
import {useDiary} from '../../query/diary';
import DiaryViewItem from './DiaryViewItem';

const DiaryListView = ListView<IDiary>;

type DiaryViewProps = {
  navigation: any;
};

export default function DiaryView({navigation}: DiaryViewProps) {
  const {data} = useDiary();
  return (
    <ScrollView>
      <DiaryListView
        items={data || []}
        getId={item => item.id}
        payload={navigation}>
        {DiaryViewItem}
      </DiaryListView>
    </ScrollView>
  );
}
