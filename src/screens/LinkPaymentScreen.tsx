import {AppText} from '@/components/AppText';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import {Button, Divider} from '@rneui/base';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import userAtom from '@atom/userAtom';
import {useCallback} from 'react';
import cutOpenbank from '../api/cutOpenbank';
import {useCheckOpenbank} from '@/query/openbank';

const LinkPaymentScreen = () => {
  const user = useRecoilValue(userAtom);

  const {data: isLink} = useCheckOpenbank();

  const handlePressCut = useCallback(() => {
    cutOpenbank().then(() => {
      ToastAndroid.show('연동 취소 완료', ToastAndroid.SHORT);
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <AppText style={styles.title}>Paiary with</AppText>
        <AppText style={styles.subtitle}>금융결제원</AppText>
        <AppText style={styles.typo}>간편하게 지출 내역 가져오기</AppText>
        <ExternalLinkButton
          buttonStyle={styles.linkButton}
          url={`http://account-diary.kro.kr:8080/api/auth/openbank/uri?user-id=${user?.id}`}>
          연동하기
        </ExternalLinkButton>
        {/* <Button buttonStyle={styles.linkButton}>연동하기</Button> */}
        <Divider />
        <Button
          disabled={!isLink}
          onPress={handlePressCut}
          buttonStyle={styles.cancelButton}>
          취소하기
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default LinkPaymentScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: -30,
  },
  title: {
    color: '#00e787',
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#00d17a',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  typo: {
    color: '#797979',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  linkButton: {
    backgroundColor: '#00e284',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
    fontWeight: 500,
  },
  cancelButton: {
    backgroundColor: '#e22600',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    fontWeight: 500,
  },
});
