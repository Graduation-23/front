import {AppText} from '@components/AppText';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import PlainButton from '@components/PlainButton';
import {useCallback, useState} from 'react';
import RegCompleteDialog from './RegCompleteDialog';
import {useNavigation} from '@react-navigation/native';
import {Entry, Content} from '@constants/screen';
import CardRegAlert from './CardRegAlert';
import {useCreateFinance} from '../../query/finance';

type CardRegBtnProps = {
  from: string;
  type: string;
  cardDes: string;
  cardNick: string;
  colorcode: string;
};

export default function CardRegBtns({
  from,
  type,
  cardDes,
  cardNick,
  colorcode,
}: CardRegBtnProps) {
  const [visible, setVisible] = useState(false);
  const [alert, setAlert] = useState(false);

  const routeFrom = from;
  const {mutateAsync: create} = useCreateFinance();
  const {navigate} = useNavigation<any>();

  const toggleErrModal = useCallback(() => {
    setAlert(prev => !prev);
  }, [setAlert]);

  const handleRegister = useCallback(() => {
    create({
      type: type,
      description: cardDes,
      anothername: cardNick,
      colorcode: colorcode,
    })
      .then(() => {
        ToastAndroid.show('추가 완료', ToastAndroid.SHORT);
      })
      .catch(() => {
        toggleErrModal();
      });
  }, [type, cardDes, cardNick, colorcode, toggleErrModal, create]);

  const toggleCompModal = () => {
    setVisible(!visible);
  };
  return (
    <>
      {routeFrom === 'setting' ? (
        <View style={styles.Btns}>
          <PlainButton
            title={
              <AppText family="round-b" text="추가" style={styles.FontSize24} />
            }
            onPress={handleRegister}
          />
          <PlainButton
            title={
              <AppText family="round-b" text="완료" style={styles.FontSize24} />
            }
            onPress={() => {
              navigate(Entry.Content, {tab: Content.SettingTab});
            }}
          />
        </View>
      ) : (
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
      )}

      {visible && (
        <RegCompleteDialog visible={visible} toggleDialog={toggleCompModal} />
      )}
      {alert && <CardRegAlert visible={alert} toggleAlert={toggleErrModal} />}
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
