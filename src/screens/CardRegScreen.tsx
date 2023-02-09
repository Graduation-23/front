import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CheckBox, Input} from '@rneui/themed';
import {View, StyleSheet, Modal} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../components/AppText';
import PlainButton from '../components/PlainButton';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';
import {useState} from 'react';
import ColorPicker from 'react-native-wheel-color-picker';

const CardRegScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Card'>) => {
  const [selectedIndex, setIndex] = useState(0);
  const [cardNick, setNick] = useState('');
  const [show, setShow] = useState(false);

  const onChangeNick = (nick: string) => {
    setNick(nick);
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
          checked={selectedIndex === 0}
          onPress={() => setIndex(0)}
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
          checked={selectedIndex === 1}
          onPress={() => setIndex(1)}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor="black"
          containerStyle={styles.CheckBox}
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
        <Modal visible={show} transparent={true}>
          <View style={{backgroundColor: 'pink'}}>
            <ColorPicker thumbSize={40} sliderSize={30} gapSize={30} />
            <PlainButton
              title={
                <AppText
                  family="round-d"
                  text="확인"
                  style={styles.FontSize20}
                />
              }
              onPress={() => {
                setShow(false);
              }}
            />
          </View>
        </Modal>
      </View>

      <View style={styles.SelectBtn}>
        <PlainButton
          title={
            <AppText family="round-b" text="확인" style={styles.FontSize24} />
          }
          onPress={() => {
            console.log('카드 등록');
          }}
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
