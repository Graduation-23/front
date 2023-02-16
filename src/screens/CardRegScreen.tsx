//import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
//import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';
//import ColorPickerModal from '../features/ColorPickerModal';
//import createFinance from '../api/createFinance';
//import RegCompleteDialog from '../features/CardRegister/RegCompleteDialog';
import CardRegHeader from '../features/CardRegister/CardRegHeader';
import CardRegContents from '../features/CardRegister/CardRegContents';

const CardRegScreen = ({route}: any) => {
  const from = route.params.from;
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
