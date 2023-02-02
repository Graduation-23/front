import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../components/AppText';
import PlainButton from '../components/PlainButton';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';
import {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const BirthRegScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Birth'>) => {
  const [date, onChangeDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [visible, setVisible] = useState(false);

  const onPressDate = () => {
    setMode('date');
    setVisible(true);
  };

  // const onPressTime = () => {
  //   setMode('time');
  //   setVisible(true);
  // };

  const onConfirm = ({selectedDate}: any) => {
    setVisible(false);
    onChangeDate(selectedDate);
  };

  const onCancel = () => {
    setVisible(false);
  };
  return (
    <SafeAreaView>
      <View>
        <Text>BirthRegScreen 입니다.</Text>
        <Text> 날짜 :</Text>
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
        mode={mode}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </SafeAreaView>
  );
};

export default BirthRegScreen;
