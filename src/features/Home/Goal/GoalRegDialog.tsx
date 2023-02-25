import {AppText} from '@/components/AppText';
import {Dialog, Input} from '@rneui/themed';
import {View} from 'react-native';
import {useState} from 'react';
import {useRequestMonthGoal, useRequestWeekGoal} from '@/query/goal';
import fetchMonthGoal from '@/api/goal/fetchMonthGoal';

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
  const {mutateAsync: requestMonthGoal} = useRequestMonthGoal();
  const {mutateAsync: requestWeekGoal} = useRequestWeekGoal();

  const handleGoal = () => {
    select === '월간'
      ? requestMonthGoal({name: name, amount: parseInt(amount), weekIds: []})
      : //console.log(name, typeof parseInt(amount))
        fetchMonthGoal().then(res =>
          requestWeekGoal({
            id: res[0].id,
            name: name,
            amount: parseInt(amount),
          }),
        );
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
