import {View, StyleSheet} from 'react-native';
import {AppText} from '@components/AppText';

import useFinance from '@/hooks/useFinance';

type CardRegHeaderType = {};

export default function CardRegHeader({}: CardRegHeaderType) {
  const {finances} = useFinance();

  return (
    <>
      <View style={styles.Title}>
        <AppText.Title text="CARD / ACCOUNT" family="round-d" />
      </View>
      <View>
        <AppText.Title
          text="사용하실 카드(계좌)를 등록해주세요 !"
          family="round-b"
        />
        <View style={styles.AlignRight}>
          <AppText
            text={`최대 5개까지 등록 가능합니다. (${finances?.length}/5)`} //ToDo: 갯수 가져와서 넣기
            family="round-b"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Title: {
    marginBottom: 35,
    marginTop: 40,
  },
  AlignRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
