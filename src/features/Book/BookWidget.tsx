import {useWidgetById} from '@/query/widget';
import {View, StyleSheet, Platform} from 'react-native';
import {AppText} from '@components/AppText';
import BookWidgetItem from './BookWidgetItem';
import {useMemo} from 'react';

interface BookWidgetProps {
  id: number;
}

export default function BookWidget({id}: BookWidgetProps) {
  const {data} = useWidgetById(id);

  const day = useMemo(() => {
    return data?.date.slice(5);
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <AppText.Subtitle family="round-b" style={styles.title}>
          {day} 소비 내역
        </AppText.Subtitle>
        {data?.items.map(el => (
          <BookWidgetItem key={el.id} item={el} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 20,
    marginTop: 0,
    borderRadius: 20,
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
  },
  shadow: {
    padding: 20,
  },
  title: {
    //fontSize: 20,
  },
});
