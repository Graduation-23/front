import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../components/AppText';
import PlainButton from '../components/PlainButton';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';
import {useState} from 'react';
import ColorPickerModal from '../features/ColorPickerModal';
//import createFinance from '../api/createFinance';
import RegCompleteDialog from '../features/CardRegister/RegCompleteDialog';
import CardRegHeader from '../features/CardRegister/CardRegHeader';
import CardRegItem from '../features/CardRegister/CardRegItem';

const CardRegScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Card'>) => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const [visible, setVisible] = useState(false);

  const toggleColorModal = () => {
    setShow(!show);
  };

  const toggleCompModal = () => {
    setVisible(!visible);
  };

  const selectColor = (icolor: string) => {
    setColor(icolor);
  };

  // const handleRegister = () => {
  //   createFinance({
  //     type: type,
  //     description: cardDes,
  //     anothername: cardNick,
  //     colorcode: color,
  //   });
  //   console.log('카드 등록');
  // };

  return (
    <SafeAreaView style={styles.Container}>
      <CardRegHeader />
      <CardRegItem />

      <View style={styles.ModalContainer}>
        <PlainButton
          title={
            <AppText
              family="round-d"
              text="COLOR 선택"
              style={styles.FontSize20}
            />
          }
          onPress={() => {
            setShow(true);
          }}
        />
      </View>
      <View style={styles.ModalContainer}>
        <AppText
          family="round-d"
          text="  선택한 색상 : "
          style={styles.FontSize20}
        />
        <View
          style={{
            borderWidth: 2,
            paddingHorizontal: 10,
            backgroundColor: color,
          }}>
          <AppText family="round-d" text="미리보기" style={styles.FontSize20} />
        </View>
      </View>
      {show && (
        <ColorPickerModal
          visible={show}
          toggle={toggleColorModal}
          icolor={color}
          selectColor={selectColor}
        />
      )}
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
            //handleRegister;
            toggleCompModal();
          }}
        />
      </View>
      {visible && (
        <RegCompleteDialog
          visible={visible}
          toggleDialog={toggleCompModal}
          nav={navigation}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  AlignRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  SelectBtn: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  Btns: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  ModalContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  FontSize24: {
    fontSize: 24,
  },
  FontSize20: {
    fontSize: 20,
  },
});

export default CardRegScreen;
