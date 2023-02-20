import useEditWidget from '@/hooks/useEditWidget';
import useFinance from '@/hooks/useFinance';
import {StyleSheet, View} from 'react-native';
import UpdateWidgetButton from './UpdateWidgetButton';
import WidgetTable from './WidgetTable';

type WidgetFormProps = Widget.Type;

export default function WidgetForm({...data}: WidgetFormProps) {
  const {widget, bind} = useEditWidget(data);
  // const {finances} = useFinance();

  return (
    <View style={styles.container}>
      <WidgetTable setItems={bind('items')} items={widget.items} />
      <UpdateWidgetButton widget={widget} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    // margin: 10,
    backgroundColor: 'white',
    padding: 6,
  },
  fullWidth: {
    overflow: 'hidden',
    width: 350,
  },
  container: {
    padding: 15,

    // display: 'flex',
    // justifyContent: 'center',
  },
  button: {
    borderRadius: 15,
    backgroundColor: '#f4e284',
  },
});
