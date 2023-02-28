import {AppText} from '@/components/AppText';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type AchieveScreenProps = {};

export default function AchieveScreen({}: AchieveScreenProps) {
  return (
    <>
      <SafeAreaView style={styles.Container}>
        <View>
          <AppText family="round-d" text="AchieveScreen" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {},
});
