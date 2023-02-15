import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';
//import ColorPickerModal from '../features/ColorPickerModal';
//import createFinance from '../api/createFinance';
//import RegCompleteDialog from '../features/CardRegister/RegCompleteDialog';
import CardRegHeader from '../features/CardRegister/CardRegHeader';
import CardRegContents from '../features/CardRegister/CardRegContents';

const CardRegScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Card'>) => {
  return (
    <SafeAreaView style={styles.Container}>
      <CardRegHeader />
      <CardRegContents nav={navigation} />

      {/* <View style={styles.Btns}>
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
      )} */}
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
