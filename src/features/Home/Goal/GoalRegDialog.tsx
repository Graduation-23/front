import {AppText} from '@/components/AppText';
import {Dialog, Input} from '@rneui/themed';
import {View} from 'react-native';
import {useState} from 'react';
import {useRequestMonthGoal} from '@/query/goal';

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
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const {mutateAsync: requestGoal} = useRequestMonthGoal();

  const handleGoal = () => {
    select === '월간'
      ? requestGoal({name: name, amount: parseInt(amount)})
      : //console.log(name, typeof parseInt(amount))
        console.log('주간');
  };

  const onChangeName = (text: string) => {
    setName(text);
  };

  const onChangeAmount = (text: string) => {
    setAmount(text);
  };

  return (
    <View>
      <Dialog isVisible={visible}>
        <Dialog.Title title={select + ' 목표 설정'} />
        <AppText family="round-d" text="목표 설정 이후 수정은 불가능합니다!" />
        <Input
          placeholder="목표 이름"
          value={name}
          onChangeText={onChangeName}
        />
        <Input
          placeholder="---원"
          value={amount}
          onChangeText={onChangeAmount}
        />
        <Dialog.Actions>
          <Dialog.Button
            title="등록"
            onPress={() => {
              toggleDialog();
              handleGoal();
              console.log({select}, '목표 등록');
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}
