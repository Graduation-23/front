import {AppText} from '@/components/AppText';
import {Dialog} from '@rneui/themed';
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  ToastAndroid,
} from 'react-native';
import {useState} from 'react';
import {useRequestMonthGoal, useRequestWeekGoal} from '@/query/goal';
import {useRecoilState, useSetRecoilState} from 'recoil';
import flowerAtom from '@/atom/flowerAtom';
import treeAtom from '@/atom/treeAtom';
import {FlowerImage, TreeImage} from '@/utils/plant';
import amountAtom from '@/atom/amountAtom';
import flowerLevelAtom from '@/atom/flowerLevelAtom';
import treeLevelAtom from '@/atom/treeLevelAtom';
import Utils from '@/utils';

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
  const setFlowerLevel = useSetRecoilState(flowerLevelAtom);
  const setTreeLevel = useSetRecoilState(treeLevelAtom);

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
      if (parseInt(amount) > 0) {
        requestMonthGoal({amount: parseInt(amount), weekIds: []}).then(() => {
          setAmountAtom(parseInt(amount));
          randomTree();
          setTreeLevel(Utils.transformTreeLevel());
        });
      }
    } else {
      if (
        AmountAtom &&
        AmountAtom - parseInt(amount) >= 0 &&
        parseInt(amount) > 0
      ) {
        requestWeekGoal({id: weekId, amount: parseInt(amount)}).then(() => {
          if (AmountAtom) {
            setAmountAtom(AmountAtom - parseInt(amount));
            randomFlower();
            setFlowerLevel(Utils.transformFlowerLevel());
          }
        });
      } else {
        if (Platform.OS === 'android') {
          ToastAndroid.show(
            '주간 목표 합이 월간 목표를 초과',
            ToastAndroid.SHORT,
          );
        }
      }
    }
  };

  const onChangeAmount = (text: string) => {
    setAmount(text);
  };

  return (
    <View>
      <Dialog isVisible={visible} overlayStyle={styles.DialogContainer}>
        <AppText.Title
          family="round-b"
          text={`${select} 목표 설정`}
          style={styles.Title}
        />
        <AppText family="round-b" text="목표 설정 이후 수정은 불가능합니다!" />
        <TextInput
          placeholder="0 원"
          value={amount}
          onChangeText={onChangeAmount}
          style={styles.Input}
        />
        <Dialog.Actions>
          <Dialog.Button
            onPress={() => {
              toggleDialog();
              handleGoal();
            }}>
            <AppText family="round-b" text="등록" />
          </Dialog.Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    marginBottom: 10,
  },
  DialogContainer: {
    borderRadius: 20,
    paddingLeft: 25,
  },
  Input: {
    fontFamily: 'Ownglyph_yoxaiov-Rg',
    fontSize: 20,
    borderBottomWidth: 1,
    marginTop: 10,
    paddingBottom: 5,
    width: '80%',
  },
});
