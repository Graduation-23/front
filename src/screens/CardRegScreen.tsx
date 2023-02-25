//import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BackHandler, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
//import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';
//import ColorPickerModal from '../features/ColorPickerModal';
//import createFinance from '../api/createFinance';
//import RegCompleteDialog from '../features/CardRegister/RegCompleteDialog';
import CardRegHeader from '@features/CardRegister/CardRegHeader';
import CardRegContents from '@features/CardRegister/CardRegContents';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {Auth} from '@/constants/screen';

const CardRegScreen = ({route}: any) => {
  const from = route.params?.from;

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (route.name === Auth.Card) {
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );

  return (
    <SafeAreaView style={styles.Container}>
      <CardRegHeader />
      <CardRegContents from={from} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default CardRegScreen;
