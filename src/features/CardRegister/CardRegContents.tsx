import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CardRegColorPicker from './CardRegColorPicker';
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
  const [color, setColor] = useState('#ffffff');
  const [show, setShow] = useState(false);

  const onChangeNick = (n: string) => {
    setCardNick(n);
  };
  const onChangeDes = (d: string) => {
    setCardDes(d);
  };
  const onChangeColor = (c: string) => {
    setColor(c);
  };
  const onChangeShow = () => {
    setShow(!show);
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
      <CardRegColorPicker
        color={color}
        onChangeColor={onChangeColor}
        show={show}
        onChangeShow={onChangeShow}
      />
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
