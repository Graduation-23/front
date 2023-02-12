import {Dialog} from '@rneui/themed';
import {View, Text, StyleSheet} from 'react-native';
//import {AppTextTitle} from '../../components/AppText/AppTextTitle';
import ColorPicker from 'react-native-wheel-color-picker';
//import {AppText} from '../../components/AppText';

type PickerProps = {
  visible: boolean;
  toggle: () => void;
  icolor: string;
  selectColor: (c: string) => void;
};

//카드 등록 시, 카드 색상 선택 모달(Dialog)
const ColorPickerModal = ({
  visible,
  toggle,
  icolor,
  selectColor,
}: PickerProps) => {
  const onClick = () => {
    console.log('누름');
    console.log('color : ', {icolor});
    toggle();
    selectColor(icolor);
  };
  return (
    <View>
      <Dialog isVisible={visible} style={{}}>
        <View style={styles.PickerContainer}>
          <ColorPicker
            sliderSize={30}
            thumbSize={30}
            gapSize={30}
            palette={[
              '#ed1c24',
              '#d11cd5',
              '#1633e6',
              '#00aeef',
              '#00c85d',
              '#57ff0a',
              '#ffde17',
              '#f26522',
            ]}
            onColorChangeComplete={color => {
              icolor = color; //현재 선택한 색상 icolor에 넣기
              selectColor(color);
            }}
          />
        </View>
        <View style={styles.BtnStyle}>
          <Text>선택한 색상 : {icolor}</Text>
          <Dialog.Button onPress={onClick}>확인</Dialog.Button>
        </View>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  PickerContainer: {
    marginHorizontal: 10,
    borderWidth: 2,
    height: '70%',
    padding: 10,
  },
  BtnStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
});

export default ColorPickerModal;
