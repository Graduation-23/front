import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CardRegInput from './CardRegInput';
import CardRegRadioBox from './CardRegRadioBox';

type CardRegItemProps = {
  //type: string;
  //setType: (t: string) => void;
};

export default function CardRegItem({}: CardRegItemProps) {
  const [type, setType] = useState('Card');
  const [cardNick, setCardNick] = useState('');
  const [cardDes, setCardDes] = useState('');

  const onChangeNick = (n: string) => {
    setCardNick(n);
  };
  const onChangeDes = (d: string) => {
    setCardDes(d);
  };

  return (
    <>
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
      <CardRegInput text="별칭" value={cardNick} onChange={onChangeNick} />
      <CardRegInput text="세부사항" value={cardDes} onChange={onChangeDes} />
    </>
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
