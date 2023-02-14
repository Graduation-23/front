import {Button} from '@rneui/base';
import {useState} from 'react';
import {View} from 'react-native';
import {IDiary} from '../../types/api';

import {AppText} from '../components/AppText';
import {useUpdateDiary} from '../query/diary';
import SpendCategoryDialog from './Category/SpendCategoryDialog';

type DiaryFormProps = {} & IDiary;

export default function DiaryForm(diary: DiaryFormProps) {
  // const {mutateAsync: save} = useUpdateDiary();

  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <View>
      <AppText>{diary.date}일기</AppText>
      <Button onPress={() => setOpenId('hello')}>open Di</Button>
      <SpendCategoryDialog
        onConfirm={(id, tag) => {
          console.log(id, tag);
        }}
        close={() => setOpenId(null)}
        openId={openId}
      />
    </View>
  );
}
