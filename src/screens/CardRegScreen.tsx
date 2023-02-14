import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CheckBox, Input} from '@rneui/themed';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../components/AppText';
import PlainButton from '../components/PlainButton';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';
import {useState} from 'react';
import ColorPickerModal from '../features/ColorPickerModal';
import createFinance from '../api/createFinance';
import RegCompleteDialog from '../features/CardRegister/RegCompleteDialog';
import CardRegHeader from '../features/CardRegister/CardRegHeader';

const CardRegScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Card'>) => {
  const [type, setType] = useState('Card');
  const [cardNick, setNick] = useState('');
  const [cardDes, setDes] = useState('');
  const [show, setShow] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const [visible, setVisible] = useState(false);

  const onChangeNick = (nick: string) => {
    setNick(nick);
  };

  const onChangeDes = (des: string) => {
    setDes(des);
  };

  const toggleColorModal = () => {
    setShow(!show);
  };

  const toggleCompModal = () => {
    setVisible(!visible);
  };

  const selectColor = (icolor: string) => {
    setColor(icolor);
  };

  const handleRegister = () => {
    createFinance({
      type: type,
      description: cardDes,
      anothername: cardNick,
      colorcode: color,
    });
    console.log('카드 등록');
  };

  return (
    <SafeAreaView style={styles.Container}>
      <CardRegHeader />

      <View style={styles.CheckBoxContainer}>
        <CheckBox
          title={
            <AppText family="round-d" text="카드" style={styles.FontSize20} />
          }
          checked={type === 'Card'}
          onPress={() => setType('Card')}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor="black"
          containerStyle={styles.CheckBox}
        />
        <CheckBox
          title={
            <AppText
              family="round-d"
              text="계좌 번호"
              style={styles.FontSize20}
            />
          }
          checked={type === 'Account'}
          onPress={() => setType('Account')}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor="black"
          containerStyle={styles.CheckBox}
          checkedTitle="Account"
        />
      </View>

      <View style={styles.InputContainer}>
        <Input
          label={
            <AppText family="round-d" text="별칭" style={styles.FontSize20} />
          }
          placeholder="별칭 입력"
          onChangeText={onChangeNick}
          value={cardNick}
        />
      </View>
      <View style={styles.InputContainer}>
        <Input
          label={
            <AppText
              family="round-d"
              text="세부사항"
              style={styles.FontSize20}
            />
          }
          placeholder="세부사항 작성"
          onChangeText={onChangeDes}
          value={cardDes}
        />
      </View>

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
            handleRegister;
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
  Title: {
    marginBottom: 35,
    marginTop: 40,
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
  CheckBoxContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginBottom: 10,
  },
  CheckBox: {
    backgroundColor: '#f2f2f2',
  },
  InputContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
