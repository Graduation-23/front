import {View, StyleSheet} from 'react-native';
import {ListItem} from '@rneui/themed';
import {AppText} from '../../components/AppText';
import {useState} from 'react';
import {useRecoilValue} from 'recoil';
import userAtom from '../../atom/userAtom';
import {useFinance} from '../../query/finance';
import UserInfoCardList from './UserInfoCardList';

export default function UserInfoContentsAccordion() {
  const user = useRecoilValue(userAtom);
  const [expanded, setExpanded] = useState(false);
  const {data} = useFinance();

  return (
    <>
      <View style={styles.List}>
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
          {data?.map(d => (
            <UserInfoCardList
              key={d.id}
              icon="home"
              label={d.anothername}
              icolor={d.colorcode}
              id={d.id}
            />
          ))}
        </ListItem.Accordion>
        <ListItem>
          <ListItem.Title>
            <AppText family="round-d" text="생년월일" />
          </ListItem.Title>
          <ListItem.Content style={styles.AlignRight}>
            <AppText family="round-d" text={`${user?.birth}`} />
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
