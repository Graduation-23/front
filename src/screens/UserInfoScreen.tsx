import {StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import UserInfoHeader from '../features/UserInfo/UserInfoHeader';
import UserInfoContentsAccordion from '../features/UserInfo/UserInfoContentsAccordion';

const UserInfoScreen = () => {
  return (
    <SafeAreaView style={styles.Container}>
      {/**Header (Profile) */}
      <UserInfoHeader />

      {/**ScrollView (Card, Birth, Created) */}
      <ScrollView style={styles.ScrollContainer}>
        <UserInfoContentsAccordion />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    height: '100%',
    flex: 1,
  },
  ScrollContainer: {
    width: '100%',
  },
});
