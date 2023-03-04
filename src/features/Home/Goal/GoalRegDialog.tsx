import {AppText} from '@/components/AppText';
import {Dialog, Input} from '@rneui/themed';
import {View} from 'react-native';
import {useState} from 'react';
import {useRequestMonthGoal, useRequestWeekGoal} from '@/query/goal';
import {useRecoilState, useSetRecoilState} from 'recoil';
import flowerAtom from '@/atom/flowerAtom';
import treeAtom from '@/atom/treeAtom';
import {FlowerImage, TreeImage} from '@/utils/plant';
import amountAtom from '@/atom/amountAtom';

export type GoalRegDialogProps = {
  visible: boolean;
  toggleDialog: () => void;
  select?: string;
  weekId?: number;
};

export default function GoalRegDialog({
  visible,
  toggleDialog,
  select,
  weekId,
}: GoalRegDialogProps) {
  const [amount, setAmount] = useState('');
  const [AmountAtom, setAmountAtom] = useRecoilState(amountAtom);

  const {mutateAsync: requestMonthGoal} = useRequestMonthGoal();
  const {mutateAsync: requestWeekGoal} = useRequestWeekGoal();

  const setTree = useSetRecoilState(treeAtom);
  const setFlower = useSetRecoilState(flowerAtom);

  const randomTree = () => {
    const random = Math.floor(Math.random() * TreeImage.length);
    setTree(TreeImage[random]);
  };

  const randomFlower = () => {
    const random = Math.floor(Math.random() * FlowerImage.length);
    setFlower(FlowerImage[random]);
  };

  const handleGoal = () => {
    if (select === '월간') {
      requestMonthGoal({amount: parseInt(amount), weekIds: []}).then(() => {
        setAmountAtom(parseInt(amount));
        randomTree();
      });
    } else {
      if (AmountAtom && AmountAtom - parseInt(amount) >= 0) {
        requestWeekGoal({id: weekId, amount: parseInt(amount)}).then(() => {
          if (AmountAtom) {
            setAmountAtom(AmountAtom - parseInt(amount));
            randomFlower();
          }
        });
      }
    }
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
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}
