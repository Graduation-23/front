import {AppText} from '@components/AppText';
import {View, StyleSheet} from 'react-native';
import PlainButton from '@components/PlainButton';
import {useState} from 'react';
import RegCompleteDialog from './RegCompleteDialog';
import createFinance from '@api/createFinance';

type CardRegBtnProps = {
  nav: any;
  type: string;
  cardDes: string;
  cardNick: string;
  colorcode: string;
};

export default function CardRegBtns({
  nav,
  type,
  cardDes,
  cardNick,
  colorcode,
}: CardRegBtnProps) {
  const [visible, setVisible] = useState(false);

  const handleRegister = () => {
    createFinance({
      type: type,
      description: cardDes,
      anothername: cardNick,
      colorcode: colorcode,
    });
    console.log('카드 등록');
  };

  const toggleCompModal = () => {
    setVisible(!visible);
  };
  return (
    <>
      <View style={styles.Btns}>
        <PlainButton
          title={
            <AppText family="round-b" text="SKIP" style={styles.FontSize24} />
          }
          onPress={() => {
            toggleCompModal();
          }}
        />
        <PlainButton
          title={
            <AppText family="round-b" text="NEXT" style={styles.FontSize24} />
          }
          onPress={() => {
            handleRegister();
            toggleCompModal();
          }}
        />
      </View>
      {visible && (
        <RegCompleteDialog
          visible={visible}
          toggleDialog={toggleCompModal}
          nav={nav}
        />
      )}
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
