import {Input} from '@rneui/themed';
import {View, StyleSheet} from 'react-native';
import {AppText} from '../../components/AppText';

type CardRegInputProps = {
  text: string;
  value: string;
  onChange: (input: string) => void;
};

export default function CardRegInput({
  text,
  value,
  onChange,
}: CardRegInputProps) {
  const onChangeText = (t: string) => {
    onChange(t);
  };

  return (
    <>
      <View style={styles.InputContainer}>
        <Input
          label={
            <AppText family="round-d" text={text} style={styles.FontSize20} />
          }
          placeholder={`${text} 입력`}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  FontSize20: {
    fontSize: 20,
  },
});
