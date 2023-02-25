import {View, StyleSheet} from 'react-native';
import {ListItem} from '@rneui/themed';
import {AppText} from '../../components/AppText';
import {useState, useCallback} from 'react';
import {useRecoilState} from 'recoil';
import userAtom from '../../atom/userAtom';
import {useFinance} from '../../query/finance';
import UserInfoCardList from './UserInfoCardList';
import {IFinance} from '@type/api';
import DatePicker from 'react-native-date-picker';
import Utils from '@/utils';
import {useUpdateBirth} from '@/query/user';
import fetchUserInfo from '@/api/fetchUserInfo';

export default function UserInfoContentsAccordion() {
  const [user, setUser] = useRecoilState(userAtom);
  const [expanded, setExpanded] = useState(false);
  const {data} = useFinance();
  const [visible, setVisible] = useState(false);
  const {mutateAsync} = useUpdateBirth();

  console.log(user);

  const handleChangeBirth = useCallback(
    (date: Date) => {
      const dateString = Utils.formatYMD(date);
      mutateAsync(dateString).then(() => {
        fetchUserInfo().then(setUser);
      });
    },
    [mutateAsync, setUser],
  );

  return (
    <>
      <View style={styles.List}>
        <ListItem>
          <ListItem.Title>
            <AppText family="round-d" text="ID" />
          </ListItem.Title>
          <ListItem.Content style={styles.AlignRight}>
            <AppText family="round-d" text={`${user?.id}`} />
          </ListItem.Content>
        </ListItem>
        <ListItem.Accordion
          content={
            <ListItem.Content>
              <ListItem.Title>
                <AppText family="round-d" text="등록된 카드" />
              </ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}>
          {data?.map((d: IFinance) => (
            <UserInfoCardList
              key={d.id}
              icon={d.type}
              label={d.anothername}
              icolor={d.colorcode}
              id={d.id}
              des={d.description}
            />
          ))}
        </ListItem.Accordion>
        <ListItem>
          <ListItem.Title>
            <AppText family="round-d" text="생년월일" />
          </ListItem.Title>
          <ListItem.Content style={styles.AlignRight}>
            <AppText
              onPress={() => setVisible(true)}
              family="round-d"
              text={`${user?.birth}`}
            />
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Title>
            <AppText family="round-d" text="가입일자" />
          </ListItem.Title>
          <ListItem.Content style={styles.AlignRight}>
            <AppText family="round-d" text={`${user?.created}`} />
          </ListItem.Content>
        </ListItem>
        <DatePicker
          title="생일"
          modal
          mode="date"
          open={visible}
          date={new Date()}
          confirmText="선택"
          cancelText="취소"
          onConfirm={d => {
            setVisible(false);
            handleChangeBirth(d);
          }}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  List: {
    width: '100%',
  },
  Text: {
    color: 'gray',
    fontSize: 30,
  },
  Size22: {
    fontSize: 22,
  },
  AlignRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
