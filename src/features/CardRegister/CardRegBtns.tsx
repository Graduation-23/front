import {AppText} from '@components/AppText';
import {View, StyleSheet} from 'react-native';
import PlainButton from '@components/PlainButton';
import {useState} from 'react';
import RegCompleteDialog from './RegCompleteDialog';
import createFinance from '@api/createFinance';
import {useNavigation} from '@react-navigation/native';
import {Entry, Content} from '@constants/screen';
import CardRegAlert from './CardRegAlert';

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
  const {navigate} = useNavigation<any>();

  const handleRegister = () => {
    createFinance({
      type: type,
      description: cardDes,
      anothername: cardNick,
      colorcode: colorcode,
    }).catch(() => {
      toggleErrModal();
    });
    console.log('카드 등록');
  };
  const toggleErrModal = () => {
    setAlert(!alert);
  };

  const toggleCompModal = () => {
    setVisible(!visible);
  };
  return (
    <>
      {routeFrom === 'setting' ? (
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
