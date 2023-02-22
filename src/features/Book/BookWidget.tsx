import {useWidgetById} from '@/query/widget';
import {View, StyleSheet} from 'react-native';
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
      <AppText style={styles.title}>{day} 소비 내역</AppText>
      {data?.items.map(el => (
        <BookWidgetItem key={el.id} item={el} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
