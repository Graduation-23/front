import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CheckBox, Input} from '@rneui/themed';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../components/AppText';
import PlainButton from '../components/PlainButton';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';
import {useState} from 'react';
//import ColorPicker from 'react-native-wheel-color-picker';
import ColorPickerModal from '../features/ColorPickerModal';
import createFinance from '../api/createFinance';

const CardRegScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Card'>) => {
  const [type, setType] = useState('Card');
  const [cardNick, setNick] = useState('');
  const [show, setShow] = useState(false);
  const [color, setColor] = useState('');

  const onChangeNick = (nick: string) => {
    setNick(nick);
  };

  const toggleColorModal = () => {
    setShow(!show);
  };

  const selectColor = (icolor: string) => {
    setColor(icolor);
  };

  const handleRegister = () => {
    createFinance({
      type: type,
      description: 'test',
      anothername: 'cardNick',
      colorcode: color,
    });
    console.log('카드 등록');
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Title}>
        <AppText.Title text="CARD / ACCOUNT" family="round-d" />
      </View>

      <View>
        <AppText.Title
          text="사용하실 카드(계좌)를 등록해주세요 !"
          family="round-c"
        />
        <View style={styles.AlignRight}>
          <AppText
            text="최대 5개까지 등록 가능합니다. (0/5)"
            family="round-c"
          />
        </View>
      </View>

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

      <View style={styles.ModalContainer}>
        <PlainButton
          title={
            <AppText family="round-d" text="COLOR" style={styles.FontSize20} />
          }
          onPress={() => {
            setShow(true);
          }}
        />
      </View>
      {show && (
        <ColorPickerModal
          visible={show}
          toggle={toggleColorModal}
          icolor={color}
          selectColor={selectColor}
        />
      )}
      <AppText text={`선택한 색상 : ${color}`} style={styles.FontSize20} />
      {/* <View style={{width: 10, height: 10}}> </View> */}
      <View style={styles.SelectBtn}>
        <PlainButton
          title={
            <AppText family="round-b" text="확인" style={styles.FontSize24} />
          }
          onPress={handleRegister}
        />
      </View>
      <View style={styles.Btns}>
        <PlainButton
          title={
            <AppText family="round-b" text="SKIP" style={styles.FontSize24} />
          }
          onPress={() => {
            navigation.navigate('Card');
          }}
        />
        <PlainButton
          title={
            <AppText family="round-b" text="NEXT" style={styles.FontSize24} />
          }
          onPress={() => {
            navigation.navigate('Card');
          }}
        />
      </View>
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
    marginTop: 50,
  },
  AlignRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  SelectBtn: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  Btns: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 40,
  },
  CheckBoxContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  CheckBox: {
    backgroundColor: '#f2f2f2',
  },
  InputContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  ModalContainer: {width: '80%', marginTop: 10},
  FontSize24: {
    fontSize: 24,
  },
  FontSize20: {
    fontSize: 20,
  },
});

export default CardRegScreen;
