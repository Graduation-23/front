import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CardRegRadioBox from './CardRegRadioBox';

type CardRegItemProps = {
  //type: string;
  //setType: (t: string) => void;
};

export default function CardRegItem({}: CardRegItemProps) {
  const [type, setType] = useState('Card');

  return (
    <View style={styles.RadioBoxConatiner}>
      <CardRegRadioBox
        text="카드"
        selected="Card"
        type={type}
        setType={() => setType('Card')}
      />
      <CardRegRadioBox
        text="계좌"
        selected="Account"
        type={type}
        setType={() => setType('Account')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  RadioBoxConatiner: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});
