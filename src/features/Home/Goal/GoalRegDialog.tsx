import {AppText} from '@/components/AppText';
import {Dialog, Input} from '@rneui/themed';
import {View} from 'react-native';
import {useState} from 'react';

export type GoalRegDialogProps = {
  visible: boolean;
  toggleDialog: () => void;
  select?: string;
};

export default function GoalRegDialog({
  visible,
  toggleDialog,
  select,
}: GoalRegDialogProps) {
  const [goal, setGoal] = useState('');
  const onChangeInput = (text: string) => {
    setGoal(text);
  };
  return (
    <View>
      <Dialog isVisible={visible}>
        <Dialog.Title title={select + ' 목표 설정'} />
        <AppText family="round-d" text="목표 설정 이후 수정은 불가능합니다!" />
        <Input placeholder="---원" value={goal} onChangeText={onChangeInput} />
        <Dialog.Actions>
          <Dialog.Button
            title="등록"
            onPress={() => {
              toggleDialog();
              console.log({select}, '목표 등록');
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}
