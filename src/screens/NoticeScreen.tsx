import {AppText} from '@/components/AppText';
import {View, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface NoticeScreenProps {}

export default function NoticeScreen({}: NoticeScreenProps) {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View style={{padding: 10, marginTop: 10}}>
          <View style={styles.NoticeContainer}>
            <AppText.Title family="round-c" text="공지사항 1" />
            <AppText
              family="round-c"
              text='회원가입 시 생일과 카드/계좌를 등록하지 않으셨으면 "설정"탭에서 등록이 가능합니다.'
              style={styles.Contents}
            />
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Title family="round-c" text="공지사항 2" />
            <AppText
              family="round-c"
              text='회원가입 시 생일과 카드/계좌를 등록하지 않으셨으면 "설정"탭에서 등록이 가능합니다.'
              style={styles.Contents}
            />
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Title family="round-c" text="공지사항 3" />
            <AppText
              family="round-c"
              text='회원가입 시 생일과 카드/계좌를 등록하지 않으셨으면 "설정"탭에서 등록이 가능합니다.'
              style={styles.Contents}
            />
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Title family="round-c" text="공지사항 4" />
            <AppText
              family="round-c"
              text='회원가입 시 생일과 카드/계좌를 등록하지 않으셨으면 "설정"탭에서 등록이 가능합니다.'
              style={styles.Contents}
            />
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Title family="round-c" text="공지사항 5" />
            <AppText
              family="round-c"
              text='회원가입 시 생일과 카드/계좌를 등록하지 않으셨으면 "설정"탭에서 등록이 가능합니다.'
              style={styles.Contents}
            />
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Title family="round-c" text="공지사항 6" />
            <AppText
              family="round-c"
              text='회원가입 시 생일과 카드/계좌를 등록하지 않으셨으면 "설정"탭에서 등록이 가능합니다.'
              style={styles.Contents}
            />
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Title family="round-c" text="공지사항 7" />
            <AppText
              family="round-c"
              text='회원가입 시 생일과 카드/계좌를 등록하지 않으셨으면 "설정"탭에서 등록이 가능합니다.'
              style={styles.Contents}
            />
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Title family="round-c" text="공지사항 8" />
            <AppText
              family="round-c"
              text='회원가입 시 생일과 카드/계좌를 등록하지 않으셨으면 "설정"탭에서 등록이 가능합니다.'
              style={styles.Contents}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    flexDirection: 'row',
  },
  NoticeContainer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#b4d2fdde',
    borderRadius: 20,
    marginBottom: 20,
  },
  Contents: {
    marginTop: 10,
  },
});
