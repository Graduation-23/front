import {AppText} from '@components/AppText';
import {View, StyleSheet} from 'react-native';
import PlainButton from '@components/PlainButton';
import createFinance from '@/api/finance/createFinance';
import {Setting} from '@constants/screen';

type CardRegConfirmBtnProps = {
  nav: any;
  type: string;
  cardDes: string;
  cardNick: string;
  colorcode: string;
};

export default function CardRegConfirmBtn({
  nav,
  type,
  cardDes,
  cardNick,
  colorcode,
}: CardRegConfirmBtnProps) {
  const handleRegister = () => {
    createFinance({
      type: type,
      description: cardDes,
      anothername: cardNick,
      colorcode: colorcode,
    });
    console.log('카드 등록');
  };

  return (
    <>
      <View style={styles.Btns}>
        <PlainButton
          title={
            <AppText
              family="round-b"
              text="Register"
              style={styles.FontSize24}
            />
          }
          onPress={() => {
            handleRegister();
            nav.navigate(Setting.Main);
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Btns: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  FontSize24: {
    fontSize: 24,
  },
});
