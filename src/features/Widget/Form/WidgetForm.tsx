import useEditWidget from '@/hooks/useEditWidget';
import {Button} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import UpdateWidgetButton from './UpdateWidgetButton';
import WidgetTable from './WidgetTable';
import WidgetUtils from '../../../utils/widget';
import {useCallback} from 'react';

type WidgetFormProps = Widget.Type;

export default function WidgetForm({...data}: WidgetFormProps) {
  const {widget, set, bind} = useEditWidget(data);

  const addEmptyItemAndFilterEmpty = useCallback(() => {
    set('items', [
      ...widget.items.filter(el => !WidgetUtils.isItemEmpty(el)),
      WidgetUtils.emptyWidgetItem(),
    ]);
  }, [widget.items, set]);

  return (
    <View style={styles.container}>
      <WidgetTable setItems={bind('items')} items={widget.items} />
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={{flexGrow: 1, marginRight: 5}}>
          <Button onPress={addEmptyItemAndFilterEmpty}>추가</Button>
        </View>
        <View style={{flexGrow: 1, marginLeft: 5}}>
          <UpdateWidgetButton widget={widget} />
        </View>
      </View>
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
});
