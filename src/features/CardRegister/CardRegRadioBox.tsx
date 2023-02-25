import {CheckBox} from '@rneui/themed';
import {View, StyleSheet} from 'react-native';
import {AppText} from '@components/AppText';

type CardRegRadioBoxType = {
  text: string;
  type: string;
  selected: string;
  setType: (t: string) => void;
};

export default function CardRegRadioBox({
  text,
  type,
  selected,
  setType,
}: CardRegRadioBoxType) {
  return (
    <View>
      <CheckBox
        title={
          <AppText family="round-d" text={text} style={styles.FontSize20} />
        }
        checked={type === selected}
        onPress={() => setType(selected)}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor="black"
        containerStyle={styles.CheckBox}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  CheckBoxContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginBottom: 10,
  },
  CheckBox: {
    backgroundColor: '#f2f2f2',
  },
  FontSize20: {
    fontSize: 20,
  },
});
