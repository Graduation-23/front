import useEditWidget from '@/hooks/useEditWidget';
import {StyleSheet, View} from 'react-native';
import WidgetTable from './WidgetTable';

type WidgetFormProps = Widget.Type;

export default function WidgetForm({...data}: WidgetFormProps) {
  const {widget, set, bind} = useEditWidget(data);

  return (
    <View style={styles.container}>
      <WidgetTable setOriginItems={bind('items')} originItems={widget.items} />
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
