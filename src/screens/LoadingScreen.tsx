import {Image} from '@rneui/base';
import {View, StyleSheet} from 'react-native';
import Logo from '@/assets/logo.png';
import {AppText} from '@/components/AppText';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={Logo} />
        <AppText
          style={{
            color: '#bdbdbd',
          }}
          center
          text="로그인 확인중..."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  image: {
    width: 220,
    height: 100,
  },
  content: {
    marginTop: -20,
  },
});
