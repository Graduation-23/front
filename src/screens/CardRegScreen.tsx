import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from '@rneui/themed';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../components/AppText';
import PlainButton from '../components/PlainButton';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';

const CardRegScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Card'>) => {
  return (
    <SafeAreaView>
      <View>
        <Text>CardRegScreen 입니다.</Text>
        <PlainButton
          title={<AppText center text="넘어가기" />}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CardRegScreen;
