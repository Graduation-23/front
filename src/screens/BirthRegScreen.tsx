import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../components/AppText';
import PlainButton from '../components/PlainButton';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';
import {useState} from 'react';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {format} from 'date-fns';
import ko from 'date-fns/esm/locale/ko/index.js';
import {Input} from '@rneui/themed';
import DatePicker from 'react-native-date-picker';

const BirthRegScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Birth'>) => {
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const onPressDate = () => {
    setVisible(true);
  };

  // const onConfirm = (selectedDate: any) => {
  //   setDate(selectedDate);
  //   console.log(selectedDate);
  //   setVisible(false);
  // };

  // const onCancel = () => {
  //   setVisible(false);
  // };
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Title}>
        <AppText.Title text="BIRTHDAY" family="round-d" />
      </View>

      <View>
        <AppText.Title text="생년월일을 선택해주세요 !" family="round-c" />
        <View style={styles.Birth}>
          <Input
            value={format(new Date(date), 'PPP', {locale: ko})}
            editable={false}
            style={styles.Input}
          />
        </View>
      </View>

      <View style={styles.SelectBtn}>
        <PlainButton
          title={
            <AppText
              family="round-b"
              text="날짜 선택"
              style={styles.FontSize24}
            />
          }
          onPress={onPressDate}
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
      <DatePicker // 날짜 선택 모달 라이브러리 (react-native-datepicker)
        title="생일 선택"
        modal
        mode="date"
        open={visible}
        date={date}
        confirmText="선택"
        cancelText="취소"
        onConfirm={(d): any => {
          setVisible(false);
          setDate(d);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        onDateChange={d => {
          console.log(d);
        }}
      />
      {/* <DateTimePickerModal
        isVisible={visible}
        onConfirm={onConfirm}
        onChange={d => {
          console.log(d);
          setDate(d);
        }}
        onCancel={onCancel}
        date={date}
      /> */}
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
  },
  Birth: {
    marginTop: 80,
  },
  Input: {
    textAlign: 'center',
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
    marginTop: 70,
  },
  FontSize24: {
    fontSize: 24,
  },
});

export default BirthRegScreen;
