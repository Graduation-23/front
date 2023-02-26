/* eslint-disable react-native/no-inline-styles */
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
            <AppText.Subtitle
              family="round-d"
              text="[공지] 생일, 카드/계좌 등록"
            />
            <AppText
              family="round-b"
              text='회원가입 시 생일과 카드/계좌를 등록하지 않으셨으면 "설정" 탭에서 등록 가능합니다.'
              style={styles.Contents}
            />
            <View style={styles.Date}>
              <AppText family="round-a" text="2023.03.09" />
            </View>
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Subtitle family="round-d" text="[공지] 목표 등록" />
            <AppText
              family="round-b"
              text="월간/주간 목표는 한 번 등록하면 수정이 불가하오니 신중히 등록 바랍니다!"
              style={styles.Contents}
            />
            <View style={styles.Date}>
              <AppText family="round-a" text="2023.03.06" />
            </View>
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Subtitle family="round-d" text="[공지] 다이어리 수정" />
            <AppText
              family="round-b"
              text="다이어리는 오늘을 기준으로 '최대 3일'까지 수정이 가능합니다. 참고 바랍니다."
              style={styles.Contents}
            />
            <View style={styles.Date}>
              <AppText family="round-a" text="2023.03.05" />
            </View>
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Subtitle family="round-d" text="[공지] 생일 수정" />
            <AppText
              family="round-b"
              text="생일은 한 번 등록하면 수정이 불가능합니다. 수정이 필요하신 분들은 [Paiary] 홈페이지를 방문해주세요!"
              style={styles.Contents}
            />
            <View style={styles.Date}>
              <AppText family="round-a" text="2023.03.02" />
            </View>
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Subtitle family="round-d" text="[공지] 식물 키우기" />
            <AppText
              family="round-b"
              text="오랫동안 다이어리를 작성하지 않는 회원님의 식물들은 시들어버립니다. 식물이 시들지 않도록 꾸준히 기록하는 습관을 들여봐요!"
              style={styles.Contents}
            />
            <View style={styles.Date}>
              <AppText family="round-a" text="2023.03.01" />
            </View>
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Subtitle family="round-d" text="[공지] 식물 공모전" />
            <AppText
              family="round-b"
              text="[Paiary] 홈페이지에서 식물 일러스트 공모전이 진행되고 있습니다! 뽑히게 되면 앱 내에서 자신이 그린 일러스트를 키울 수 있답니다! 많은 관심과 참여 부탁드립니다."
              style={styles.Contents}
            />
            <View style={styles.Date}>
              <AppText family="round-a" text="2023.02.28" />
            </View>
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Subtitle family="round-d" text="[공지] 금융결제원 사용" />
            <AppText
              family="round-b"
              text="자신이 사용하는 카드/계좌를 금융결제원을 사용해 연동해보세요! 더욱 편리한 앱 사용이 가능합니다."
              style={styles.Contents}
            />
            <View style={styles.Date}>
              <AppText family="round-a" text="2023.02.26" />
            </View>
          </View>
          <View style={styles.NoticeContainer}>
            <AppText.Subtitle family="round-d" text="[알림] 환영합니다." />
            <AppText
              family="round-b"
              text="[Paiary]에 오신걸 환영합니다."
              style={styles.Contents}
            />
            <View style={styles.Date}>
              <AppText family="round-a" text="2023.02.24" />
            </View>
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
  Date: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
});
