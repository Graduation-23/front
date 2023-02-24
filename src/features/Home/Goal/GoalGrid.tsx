import {AppText} from '@/components/AppText';
import {View, StyleSheet} from 'react-native';
import {bodyDatas, heads} from './constants';

type GoalGridProps = {};

export default function GoalGrid({}: GoalGridProps) {
  return (
    <>
      <View style={styles.GridContainer}>
        <View style={styles.GridHeaders}>
          {heads.map((head, index) => (
            <View key={index}>
              <AppText.Subtitle family="round-b" text={head} />
            </View>
          ))}
        </View>
        <View>
          {bodyDatas.map((datas, index) => (
            <View key={index} style={styles.GridContents}>
              {datas.map((week, index2) => (
                <View key={index2} style={styles.GridDatas}>
                  <AppText family="round-b" text={week} />
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  GridContainer: {
    width: '100%',
  },
  GridHeaders: {
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingVertical: 5,
  },
  GridContents: {
    flexGrow: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  GridDatas: {
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
