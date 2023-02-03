import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../components/AppText';
import PlainButton from '../components/PlainButton';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';
import {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {format} from 'date-fns';
import ko from 'date-fns/esm/locale/ko/index.js';

const BirthRegScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Birth'>) => {
  const [date, setDate] = useState(new Date());
  //const [mode, setMode] = useState('date');
  const [visible, setVisible] = useState(false);

  const onPressDate = () => {
    //setMode('date');
    setVisible(true);
  };

  const onConfirm = (selectedDate: any) => {
    setDate(selectedDate);
    console.log(selectedDate);
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };
  return (
    <SafeAreaView>
      <View>
        <Text>BirthRegScreen 입니다.</Text>
        <View>
          {/* <Text>{`날짜 : ${date}`}</Text> */}
          <Text>{format(new Date(date), 'PPP', {locale: ko})}</Text>
        </View>
        <PlainButton
          title={<AppText center text="날짜 선택" />}
          onPress={onPressDate}
        />
        <PlainButton
          title={<AppText center text="넘어가기" />}
          onPress={() => {
            navigation.navigate('Card');
          }}
        />
      </View>
      <DateTimePickerModal
        isVisible={visible}
        onConfirm={onConfirm}
        onChange={d => {
          console.log(d);
          setDate(d);
        }}
        onCancel={onCancel}
        date={date}
      />
    </SafeAreaView>
  );
};

export default BirthRegScreen;
